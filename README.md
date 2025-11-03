# n8n-nodes-ireporter

Custom n8n node for i-Reporter API with automatic login and session management.

## Features

- 🔐 Automatic login and session handling
- 🔄 Session reuse across workflow executions
- 📦 Easy integration with i-Reporter API
- ⚡ Fast and efficient API calls

## Installation

### Community Nodes (Recommended)

1. Go to **Settings > Community Nodes** in your n8n instance
2. Select **Install a community node**
3. Enter `n8n-nodes-ireporter-unofficial`
4. Click **Install**
5. **Restart n8n** after installation for the node to load properly

> **Note**: If you encounter loading errors, try restarting n8n completely or reinstalling the node.

### Manual Installation

```bash
npm install n8n-nodes-ireporter
```

## Configuration

1. Create new credentials in n8n:
   - **Credentials Type**: i-Reporter API
   - **Base URL**: Your i-Reporter API base URL
   - **Username**: Your i-Reporter username
   - **Password**: Your i-Reporter password

2. Use the credentials in the i-Reporter node

## Usage

1. Add the **i-Reporter API** node to your workflow
2. Select your credentials
3. Enter the API command (e.g., `GetReportDetail`, `GetProjectList`)
4. Add parameters as JSON

### Example Parameters

```json
{
	"topId": "12345"
}
```

## Development

```bash
# Install dependencies
npm install

# Build the node
npm run build

# Watch mode for development
npm run dev

# Lint code
npm run lint

# Format code
npm run format
```

## License

MIT

## Author

Your Name

## Support

For issues and questions, please visit the [GitHub repository](https://github.com/yourusername/n8n-nodes-ireporter).
