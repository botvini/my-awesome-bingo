# AGENTS.md

Guidance for AI coding agents working in this repository.

## Mission
- Build and iterate on a React + TypeScript Bingo game used in the workshop flow.
- Keep changes small, testable, and aligned with existing workshop guidance.

## Mandatory Dev Checklist
- [ ] Install dependencies: `npm install`
- [ ] Lint passes: `npm run lint`
- [ ] Build passes: `npm run build`
- [ ] Tests pass: `npm run test`
- [ ] For UI changes, run app locally: `npm run dev`

## Commands
- Dev server: `npm run dev` (Vite on http://localhost:5173)
- Lint: `npm run lint`
- Build: `npm run build`
- Test: `npm run test` (Vitest)

## Architecture Map
- App entry and screen switching: [src/App.tsx](src/App.tsx)
- Game state and persistence: [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts)
- Pure game logic: [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts)
- Logic tests: [src/utils/bingoLogic.test.ts](src/utils/bingoLogic.test.ts)
- Question data source: [src/data/questions.ts](src/data/questions.ts)
- Main UI components: [src/components](src/components)

## Project Conventions
- Prefer pure logic in utilities and keep UI components thin.
- Preserve localStorage compatibility in [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts):
  - Keep `STORAGE_KEY` stable.
  - Bump `STORAGE_VERSION` only for intentional schema changes.
  - Update `validateStoredData` when storage schema changes.
- Keep bingo rules in [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts) and validate behavior with tests before/after edits.

## Styling and Frontend Rules
- Tailwind v4 guidance lives in [tailwind-4.instructions.md](.github/instructions/tailwind-4.instructions.md).
- For redesign or UX tasks, use the frontend design skill in [SKILL.md](.github/skills/frontend-design/SKILL.md).
- For critical playtesting and fun/flow feedback, use the dogfooding skill in [SKILL.md](.github/skills/dogfooding/SKILL.md).

## Existing Custom Agents
- TDD flow: [tdd-red.agent.md](.github/agents/tdd-red.agent.md), [tdd-green.agent.md](.github/agents/tdd-green.agent.md), [tdd-refactor.agent.md](.github/agents/tdd-refactor.agent.md), [tdd.agent.md](.github/agents/tdd.agent.md)
- UI exploration/review: [pixel-jam.agent.md](.github/agents/pixel-jam.agent.md), [ui-review.agent.md](.github/agents/ui-review.agent.md)
- Theme content helper: [quiz-master.agent.md](.github/agents/quiz-master.agent.md)

## Docs to Link Instead of Rewriting
- Project overview and run instructions: [README.md](README.md)
- Workshop steps: [workshop/GUIDE.md](workshop/GUIDE.md)
- Setup flow: [workshop/01-setup.md](workshop/01-setup.md)
- Contribution/legal process: [CONTRIBUTING.md](CONTRIBUTING.md)

## Agent Working Style
- Prefer minimal, targeted edits over broad rewrites.
- When changing behavior, add or update tests first or in the same change.
- After code edits, run lint + test at minimum; run build for cross-file or type-level changes.
- Do not duplicate workshop docs in generated guidance; link to them.
