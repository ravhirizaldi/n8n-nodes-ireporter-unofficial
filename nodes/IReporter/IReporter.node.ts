import { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import axios from 'axios';

export class IReporter implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'i-Reporter API',
		name: 'iReporter',
		group: ['transform'],
		version: 1,
		description: 'Login + execute i-Reporter API in one node',
		defaults: { name: 'i-Reporter API' },
		inputs: ['main'],
		outputs: ['main'],
		credentials: [{ name: 'ireporterApi', required: true }],
		properties: [
			{
				displayName: 'Command',
				name: 'command',
				type: 'string',
				default: 'GetReportDetail',
				description: 'API command (e.g. Login, GetReportDetail, GetProjectList, etc)',
			},
			{
				displayName: 'Parameters (JSON)',
				name: 'params',
				type: 'json',
				default: '{}',
				description: 'JSON body params, e.g. { "topId": "12345" }',
			},
		],
	};

	async execute(this: IExecuteFunctions) {
		const credentials = await this.getCredentials('ireporterApi');
		const baseUrl = credentials.baseUrl as string;
		const user = credentials.username as string;
		const pass = credentials.password as string;

		// --- Simple in-memory session per workflow run ---
		const staticData = this.getWorkflowStaticData('global');
		let cookie: string | null = (staticData.ireporterCookie as string) || null;

		// --- Login only if no session cached ---
		if (!cookie) {
			const loginRes = await axios.post(`${baseUrl}/CDataWS/Service.asmx/Login`, {
				command: 'Login',
				user: user,
				password: pass,
			});

			const setCookie = loginRes.headers['set-cookie']?.[0]?.split(';')[0];
			if (!setCookie) throw new Error('Login failed: No cookie received');
			staticData.ireporterCookie = setCookie;
			cookie = setCookie;
		}

		// --- Prepare request ---
		const items = this.getInputData();
		const results = [];

		for (let i = 0; i < items.length; i++) {
			const command = this.getNodeParameter('command', i) as string;
			const params = this.getNodeParameter('params', i) as Record<string, unknown>;

			const body = { command, ...params };

			const response = await axios.post(`${baseUrl}/CDataWS/Service.asmx/${command}`, body, {
				headers: {
					'Content-Type': 'application/json',
					Cookie: cookie!,
				},
			});

			results.push({ json: response.data });
		}

		return [results];
	}
}
