# Project Guidelines

## Build and Test

```bash
npm start        # dev server at http://localhost:4200
npm run build    # production build
npm test         # run tests (watch mode)
npm run watch    # build in watch mode (development)
```

See [README.md](../README.md) for full CLI usage and scaffolding commands.

## Architecture

- **Angular 21**, standalone components — no NgModules anywhere
- Bootstrap via `bootstrapApplication(App, appConfig)` in `src/main.ts`
- Providers registered in `src/app/app.config.ts` (e.g. `provideRouter`)
- Routes defined in `src/app/app.routes.ts`

## Conventions

### Components

- Use **standalone API**: `imports` array in `@Component`, never `NgModule`
- Separate template and style files (`.html` / `.css`) — no inline templates/styles for components with real content
- Component selector prefix: `app-`
- Generate with: `ng generate component <name>`

### State

- Prefer **signals** (`signal()`, `computed()`, `effect()`) over plain class properties for reactive state
- Use `@angular/core` signal APIs, not third-party state libraries unless explicitly added

### Testing

- Test runner is **Vitest** (not Karma/Jasmine) — `ng test` uses `@angular/build:unit-test`
- Test files: `*.spec.ts` alongside source files
- Use `TestBed` for component tests; refer to `src/app/app.spec.ts` as the baseline pattern

### Formatting

- **Prettier** enforced: `printWidth: 100`, `singleQuote: true`, Angular HTML parser for `.html`
- **EditorConfig**: 2-space indent, single quotes, UTF-8
- TypeScript strict mode enabled — no `any`, no implicit returns, no implicit overrides
