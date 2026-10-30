# CLAUDE.md

## Project
Accessible React component library. Stack: Vite, React, TypeScript (strict), Vitest, Testing Library, Storybook (later).
TypeScript is pinned to 6.0.x on purpose (see DECISIONS.md). Do not upgrade it.

## Commands
- npm run dev        start dev server
- npm run build      type-check and build
- npm run lint       ESLint
- npm run test:run   run tests once
- npm test           run tests in watch mode

## How we work
- I am learning React, TypeScript and Next.js while building. Explain what you do and why, briefly, in Italian.
- Code, comments and file names are in English.
- I write the tests first. Make them pass; NEVER edit a test to make it pass. If a test seems wrong, tell me and ask.
- Before changing more than one file, propose a short plan and wait for my approval.
- One component per task. Small steps.
- Do not add dependencies without asking.
- Never run git commit or git push. I commit myself.

## Code rules
- TypeScript strict. No `any`. No `!` non-null assertions without a comment explaining why.
- Accessibility first: native elements, correct roles/labels, keyboard support, visible focus.
- Components live in src/components/<Name>/ with <Name>.tsx and <Name>.test.tsx side by side.
- Style: CSS Modules, no UI libraries.