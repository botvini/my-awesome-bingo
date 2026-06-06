---
name: dogfooding
description: 'Critically dogfood a running app in the built-in browser and report UX, fun, and flow issues. Use for playtesting, smoke-testing, critical product feedback, and identifying what feels flat or confusing.'
argument-hint: 'What app, screen, or user flow should be dogfooded?'
---

# Dogfooding

Use this skill to test a running product like a skeptical real user, not just a code reviewer. The goal is to interact with the app end to end, identify what works, and surface what feels confusing, weak, or not fun.

## When to Use

- The user asks to dogfood, playtest, or critically test the app.
- You need UX feedback grounded in real interaction, not code inspection.
- You want feedback on delight, fun, clarity, pacing, or replay value.
- You need a reusable browser-based workflow for validating product experience.

## Procedure

1. Make sure the app is actually running.
If there is no reachable local preview, start the dev server first and note the URL.

2. Open the product in the built-in browser.
Prefer the running local URL. Reuse an existing shared page when possible.

3. Exercise the core user path as a real user would.
Start with the main entry flow, then progress through the primary loop instead of stopping at the first screen.

4. Push until you reach a meaningful outcome.
For a game, that means reaching a win or loss state. For a form, complete submission. For a workflow app, finish the main task.

5. Check the second-order UX.
After the main success state, inspect what happens next: replay loop, reset path, retention hooks, empty states, and whether momentum continues or dies.

6. Judge the experience, not just correctness.
Comment on friction, clarity, emotional payoff, novelty, pacing, and whether the app creates energy or feels merely functional.

7. Report findings in severity order.
Lead with concrete issues that affect fun, usability, or product value. Keep summary and praise secondary.

## Decision Points

- If the app is unreachable, restart or launch the dev server before continuing.
- If multiple flows exist, prioritize the one most central to the product promise.
- If the product claims to be playful or social, explicitly assess whether the interaction actually creates that feeling.
- If the first pass is too shallow to judge the experience, continue until you hit a real outcome and one follow-up state.

## Quality Bar

- Feedback must be grounded in actual browser interaction.
- The report must distinguish between functionality and delight.
- Findings should explain why something hurts the experience, not just that it exists.
- The test is incomplete until the main loop and at least one post-success or reset path have been exercised.

## Output Format

Structure the result as:
