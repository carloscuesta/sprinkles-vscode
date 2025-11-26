# AGENTS.md

This document provides a comprehensive overview of the Sprinkles VSCode theme project for AI agents.

## Overview

**Sprinkles** is a VSCode color theme extension featuring vibrant syntax highlighting with carefully curated color palettes. It provides both dark and light theme variants with a unique "sprinkled" aesthetic inspired by colorful sprinkles on donuts.

### Key Features

- Dark and light theme variants
- Comprehensive syntax highlighting for multiple languages
- Carefully designed UI colors for VSCode interface elements
- Terminal color customization
- Git diff gutter indicators

## Architecture

### Project structure

```
sprinkles-vscode/
├── src/                    # Source code
│   ├── colors/            # Color palette definitions
│   │   ├── index.ts      # Color loader/selector
│   │   ├── dark.ts       # Dark theme color palette
│   │   └── light.ts      # Light theme color palette
│   ├── theme.ts           # Theme generator (main logic)
│   └── index.ts           # Build script entry point
├── themes/                # Generated theme JSON files (output)
│   ├── sprinkles-dark.json
│   └── sprinkles-light.json
├── images/                # Extension assets (icon)
├── .vscode/               # VSCode configuration
│   └── launch.json       # Debug configuration
└── package.json           # Extension manifest & build config
```

### Architecture flow

```
┌─────────────────┐
│   src/index.ts    │  Entry point - orchestrates theme generation
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  src/theme.ts     │  Theme generator - creates VSCode theme structure
└────────┬────────┘
         │
         ▼
┌──────────────────┐
│ src/colors/*.ts    │  Color palettes - defines color schemes
└──────────────────┘
         │
         ▼
┌──────────────────┐
│ themes/*.json      │  Output - VSCode theme files
└──────────────────┘
```

### Components

#### 1. **src/index.ts**

- Entry point for theme generation
- Creates `themes/` directory if it doesn't exist
- Generates both dark and light theme JSON files
- Writes formatted JSON output with proper error handling

#### 2. **src/theme.ts**

- Core theme logic
- Maps color palettes to VSCode theme properties
- Defines token scopes for syntax highlighting
- Returns complete VSCode theme object with:
  - Editor colors (background, foreground, cursor, etc.)
  - UI colors (activity bar, sidebar, status bar, etc.)
  - Terminal ANSI colors
  - Token colors (syntax highlighting rules)

#### 3. **src/colors/**

- `index.ts`: Exports color getter function based on variant
- `dark.ts`: Dark theme color definitions
- `light.ts`: Light theme color definitions
- Color structure includes:
  - Canvas colors (UI elements)
  - Editor colors (code editor specific)
  - Terminal colors (ANSI color mappings)
  - Token colors (syntax highlighting)

#### 4. **package.json**

- VSCode extension manifest
- Declares two theme contributions (dark and light)
- Defines build scripts and dependencies
- Extension metadata (name, version, publisher, etc.)

### Technology Stack

- **TypeScript**: Primary language
- **Node.js**: Runtime environment
- **ts-node**: TypeScript execution without compilation
- **nodemon**: Development file watcher
- **vsce**: VSCode Extension packager
- **Prettier**: Code formatting
- **Husky**: Git hooks for code quality

## Running the project

### Prerequisites

```bash
npm install
```

### Development

#### Build themes

Generate theme JSON files from source:

```bash
npm run build
```

This executes `ts-node ./src/index.ts` which:

1. Reads color definitions from `src/colors/`
2. Generates theme objects via `src/theme.ts`
3. Writes `themes/sprinkles-dark.json` and `themes/sprinkles-light.json`

#### Watch mode

Auto-rebuild themes on file changes:

```bash
npm run dev
```

Uses nodemon to watch `src/` directory and rebuild on changes.

### Testing the Theme

#### Method 1: Debug Mode

1. Open project in VSCode
2. Press `F5` or go to Run & Debug panel
3. Select "Extension" configuration
4. Click "Start Debugging"
5. A new VSCode window opens with the extension loaded
6. Open Command Palette (`Cmd+Shift+P` or `Ctrl+Shift+P`)
7. Select "Preferences: Color Theme"
8. Choose "Sprinkles Dark" or "Sprinkles Light"

#### Method 2: Local Installation

```bash
npm run publish:vsce -- --no-publish
code --install-extension sprinkles-vscode-*.vsix
```

### Code Quality

```bash
npm run lint

npx prettier --write .
```

## Debugging

1. **Using VSCode Debugger**:
   - Configuration is in `.vscode/launch.json`
   - Type: `extensionHost` (launches VSCode Extension Host)
   - Press `F5` to start debugging
   - Set breakpoints won't work (no runtime code, just JSON generation)

2. **Theme Generation**:

   ```bash
   # Add console.log statements in src/index.ts or src/theme.ts
   npm run build

   # Or use Node debugger
   node --inspect-brk ./node_modules/.bin/ts-node ./src/index.ts
   ```

3. **Theme Output**:
   - Inspect generated files: `themes/sprinkles-dark.json`
   - Use VSCode Developer Tools in extension host: `Help > Toggle Developer Tools`
   - Check theme token inspector: `Developer: Inspect Editor Tokens and Scopes`

### Common Issues

**Theme not updating in extension host:**

- Reload the extension host window (`Cmd+R` or `Ctrl+R`)
- Or restart the debug session

**Colors not appearing correctly:**

- Check generated JSON files in `themes/` directory
- Verify color definitions in `src/colors/dark.ts` or `light.ts`
- Use token inspector to see applied scopes

**Build errors:**

- Ensure TypeScript files have no syntax errors
- Check that all color properties are properly defined
- Verify color values are valid hex codes

## Making Changes

### Adding New Colors

1. Edit color palettes:
   - Dark: `src/colors/dark.ts`
   - Light: `src/colors/light.ts`

2. Rebuild:

   ```bash
   npm run build
   ```

3. Test in extension host (F5)

### Modifying Syntax Highlighting

1. Edit `src/theme.ts`
2. Locate `tokenColors` array
3. Add/modify scope rules:
   ```typescript
   {
     name: "My Custom Token",
     scope: ["source.js meta.class"],
     settings: {
       foreground: colors.editor.tokens.amber,
       fontStyle: "italic"
     }
   }
   ```
4. Rebuild and test

### Changing UI Colors

1. Edit `colors` object in `src/theme.ts`
2. Find VSCode theme key (e.g., `"activityBar.background"`)
3. Map to color from palette
4. Rebuild and test

## Publishing

```bash
npm run publish:vsce
```

Requires publisher credentials configured with `vsce`.

## Additional Resources

- [VSCode Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)
- [TextMate Scopes](https://macromates.com/manual/en/language_grammars)
- [VSCode Extension API](https://code.visualstudio.com/api)
