# Deployment Checklist

## Files Created ✓

- ✅ `.gitignore` - Excludes build files, dependencies, and temporary files
- ✅ `.prettierrc` - Prettier configuration with standard settings
- ✅ `.prettierignore` - Files to ignore for Prettier
- ✅ `eslint.config.js` - ESLint 9.x flat config with TypeScript support
- ✅ `.npmignore` - Excludes source files from npm package
- ✅ `LICENSE` - MIT License
- ✅ `README.md` - Complete documentation
- ✅ `.github/workflows/publish.yml` - GitHub Actions workflow for npm publishing

## Package.json Updates ✓

- ✅ Added `files` field to publish only `dist` folder
- ✅ Added scripts: `build`, `dev`, `lint`, `lint:fix`, `format`, `format:check`
- ✅ Added `prepublishOnly` script for automatic checks before publishing
- ✅ Updated n8n configuration to use compiled `.js` files
- ✅ Moved `n8n-workflow` to `peerDependencies`
- ✅ Added latest dev dependencies (ESLint 9.x, Prettier 3.x, TypeScript 5.7)
- ✅ Added repository, author, and license fields
- ✅ Added engine requirement (Node.js >= 18)

## Before Publishing

### 1. Update package.json

Edit the following fields in `package.json`:

- `author.name` - Your name
- `author.email` - Your email
- `repository.url` - Your GitHub repository URL

### 2. Register on npm

- Go to https://www.npmjs.com/signup
- Create an account

### 3. Create npm Token

- Login to npmjs.com
- Go to Profile → Access Tokens → Generate New Token
- Choose "Automation" type
- Copy the token

### 4. Add Token to GitHub

- Go to your GitHub repository → Settings → Secrets and variables → Actions
- Click "New repository secret"
- Name: `NPM_TOKEN`
- Value: Paste your npm token

### 5. Build and Test Locally

```bash
npm run build
npm run lint
npm run format:check
```

### 6. Push to GitHub

```bash
git add .
git commit -m "Initial commit with deployment setup"
git push origin main
```

### 7. Publish

**Option A: Create a GitHub Release**

- Go to GitHub → Releases → Create a new release
- Tag version (e.g., v1.0.0)
- This automatically triggers the workflow

**Option B: Manual Workflow**

- Go to GitHub → Actions → "Publish to NPM" → Run workflow

## Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Watch mode for development
- `npm run lint` - Check for linting errors
- `npm run lint:fix` - Fix linting errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is formatted correctly

## What Gets Published

Only the `dist` folder contents are published to npm, which includes:

- Compiled JavaScript files (.js)
- TypeScript declarations (.d.ts)
- Source maps (.js.map)

The following are excluded from npm:

- Source TypeScript files
- Configuration files
- Development dependencies
- Tests
- GitHub workflows
