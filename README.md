# code-info

Small CLI to collect stats about source files in a project and print a colored table summary.

## Install

```bash
npm install
npm run build
```

## Run

After building, run the CLI via the `dist` entrypoint:

```bash
node ./dist/index.js [folders] --cwd . --exclude node_modules --ext .ts --unknown
```

- `folders`: optional list of folders to scan (defaults to current working directory)
- `--cwd`: project root to resolve paths (default: `.`)
- `--exclude`: comma/space-separated list of paths/patterns to ignore
- `--ext`: include only files with given extensions (repeatable)
- `--unknown`: include files with unknown extensions in the language breakdown

Example:

```bash
node ./dist/index.js src --cwd . --exclude node_modules .git --ext .ts --ext .js
```

## Output

The tool prints a compact summary (files, lines, size, code lines, blank lines, languages) and a per-language table with counts and sizes. Output uses ANSI colors and a table layout.

## Notes

- If the project is a git repository the tool uses `git ls-files` for listing files. Otherwise it falls back to a filesystem search.
- `cli-table3` and `ansi-colors` are used for rendering. If you modify the renderer, keep terminal-friendly colors and widths in mind.

## Development

During development you can run `npm run dev` to compile in watch mode and run the built binary.

