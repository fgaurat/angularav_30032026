# Project Guidelines

## Build and Test
- Install dependencies with `npm install`.
- Start the Angular dev server with `npm start`.
- Build with `npm run build`.
- For one-off validation, prefer `npm run test -- --watch=false`; plain `npm run test` starts Vitest in watch mode.
- See [README.md](/Users/fgaurat/local_dev/formations/angularav_30032026/ngrx-todo-list-app/README.md) for the generated Angular CLI basics.

## Architecture
- This is an Angular 21 standalone application bootstrapped from `src/main.ts` with app-wide providers registered in `src/app/app.config.ts`.
- The current app shell renders `TodoListPage` directly; routing is configured but `src/app/app.routes.ts` is empty, so do not introduce router-driven changes unless the task requires it.
- The todo domain is feature-first under `src/app/features/todo/` with `actions/`, `components/`, `effects/`, `models/`, `reducers/`, and `services/`.
- NgRx state is registered under the `todoList` store key in `src/app/app.config.ts`; keep selectors and state access aligned with that key.
- Use these files as the reference flow for list loading and deletion: `src/app/features/todo/actions/todo.actions.ts`, `src/app/features/todo/reducers/todo.reducer.ts`, `src/app/features/todo/effects/todos-effect.ts`, and `src/app/features/todo/components/todo-list/todo-list.ts`.
- The API base URL comes from `src/environments/environment.ts` and currently targets `http://localhost:3000/todos`.

## Conventions
- Components in this repo are standalone and imported directly into parent components and specs via the `imports` array.
- Preserve the current feature-first file layout and file naming style such as `todo-list.ts`, `todo-form.html`, and `todos-effect.ts`.
- Templates already use Angular built-in control flow like `@if` and `@for`; match that style instead of switching back to `*ngIf` or `*ngFor` unless there is a specific reason.
- Both template-driven and reactive form examples exist under the todo feature. Keep changes localized to the form style already used by the component you are editing unless the task is explicitly a refactor.
- Keep edits small and consistent with the existing component quartet: `.ts`, `.html`, `.css`, and `.spec.ts`.

## Known Pitfalls
- Current tests are not green. Several specs instantiate components or effects without the Store, Effects, or HTTP providers they depend on, so check existing failures before assuming a new change caused them.
- `src/app/app.spec.ts` still asserts the starter heading in `src/app/app.html`; if you change the shell markup, update that spec intentionally.
- The app uses `TodoService` with `HttpClient`; any runtime or test setup touching that path must ensure the required HTTP providers are registered.