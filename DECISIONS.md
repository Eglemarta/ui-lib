# Decisions

Each entry: what I chose, why, and what I discarded.

## 1. TypeScript pinned to 6.0.x (exact version)
- **Context:** the Vite template installs TypeScript 7, but typescript-eslint declares a peer dependency on `typescript <6.1.0`, so `npm install` fails with ERESOLVE.
- **Choice:** pin TypeScript to 6.0.x with an exact version (no `^`).
- **Discarded:** `--legacy-peer-deps` (the install succeeds, but the lint tool can crash at runtime); removing ESLint (loses checks).
- **Revisit when:** typescript-eslint supports TypeScript 7.

## 2. Vitest instead of Jest
- **Choice:** Vitest, because it reuses the Vite configuration (same pipeline, no separate Babel/ts-jest setup).
- **Discarded:** Jest (extra configuration for TypeScript and ES modules).