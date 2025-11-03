import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class IReporterApi implements ICredentialType {
  name = 'ireporterApi';
  displayName = 'i-Reporter API';
  properties: INodeProperties[] = [
    {
      displayName: 'Base URL',
      name: 'baseUrl',
      type: 'string',
      default: 'http://localhost/ConMasAPI/Rests/APIExecute.aspx',
    },
    {
      displayName: 'User',
      name: 'username',
      type: 'string',
      default: '',
    },
    {
      displayName: 'Password',
      name: 'password',
      type: 'string',
      typeOptions: { password: true },
      default: '',
    },
  ];
}
