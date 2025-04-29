# Screeps TS Bun

Screeps TS Bun is a starting point for a Screeps AI written in Typescript that uses [Bun](https://bun.sh/) to **manage packages**, **compile**, **minify**, and **treeshake** your script, as well as Biome to ensure code formatting and best practices. It provides everything you need to start writing your AI, keeping `main.ts` as clean as possible.

## Installation

The project requires a few programs to work properly:

#### Prerequisites

1. Install the latest version of [Bun](https://bun.sh/) following the official instructions:
   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

2. (Optional) Install [Biome](https://biomejs.dev/) globally to run commands manually:
   ```bash
   bun add -g @biomejs/biome
   ```

#### Editor Configuration (VSCode or other IDE)

To ensure code style (Biome) is applied, install the [Biome extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) in your editor. The settings below are for VSCode and already configured in the project. If you use another editor, make sure to configure it correctly.

> **Note:** If you are using VSCode, you can skip this step as the settings are already included in the project.

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.biome": "explicit",
    "source.organizeImports.biome": "explicit"
  },
  "[javascript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[typescript]": {
    "editor.defaultFormatter": "biomejs.biome"
  }
}
```

This ensures Biome rules are applied on every save.

#### Project Dependencies

To install project dependencies, run:

```bash
bun install
```

## Usage

After installing dependencies, open the project folder in your preferred text editor and start writing your AI.

### Environment Variables

To control the build behavior, set the following environment variables:

- BRANCH: The branch name on Screeps to upload the AI to.
- SERVER: The Screeps server to upload the AI to.
- DRY_RUN: If set to true, the build **will not upload** the AI to Screeps.
- BUILD_ALL: If set to true, the build script will **build** all scripts in the project, **not just** main.ts.

Copy `.env.example` to `.env` and edit as needed.

### Screeps Credentials

To upload your AI to Screeps, you need a Screeps account and a valid API token, which you can get from your [Screeps account](https://screeps.com/a/#!/account/auth-tokens).
With the token in hand, copy `.screeps.example.yaml` to `.screeps.yaml` and add your credentials.

> **Note:** For more details about this file, see [SS3: Unified Credentials File v1.0](https://github.com/screepers/screepers-standards/blob/master/SS3-Unified_Credentials_File.md)

### Building/uploading your AI

To compile and upload your AI, use:

```bash
bun run upload
```

This command will **compile** your AI and **upload** it to Screeps. If you just want to compile to inspect the result, use:

```bash
bun run build
```

## Contributing

Contributions are welcome! Open an issue or pull request in this repository.
