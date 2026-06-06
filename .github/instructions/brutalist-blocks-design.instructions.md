---
description: Use when redesigning UI with the Brutalist Blocks theme, updating component layout or colors, or refining visual state feedback. Enforces hard brutalism, AA readability, and visual-only scope.
applyTo: src/components/**/*.tsx, src/index.css
---

# Brutalist Blocks Design Guide

## Scope
- This guide applies to presentation changes only.
- Do not change game logic, persistence schema, or question data while applying this design system.

## Visual Language
- Use hard geometric forms with strong borders and block-like layout sections.
- Prefer stark contrast and flat fills over glow effects, blurs, and soft gradients.
- Keep corner radius minimal; default to square edges unless usability requires slight rounding.
- Build hierarchy with size, weight, spacing, and border thickness before adding decorative effects.

## Color and Tokens
- Define and use design tokens in src/index.css via @theme.
- Reuse existing semantic tokens for state styling instead of introducing one-off colors in components.
- Ensure unmarked, marked, winning, and free-space states are visually distinct even without animation.
- Prefer border and fill contrast over color hue alone for state differentiation.

## Typography and Readability
- Prioritize legibility and WCAG AA contrast for all UI text.
- Use display typography for headings and compact, readable body text for square content.
- Preserve comfortable line height for multi-line square labels and avoid clipped text.

## Interaction and Motion
- Keep motion minimal and purposeful.
- Use fast, subtle transitions for interaction feedback; avoid continuous decorative animations.
- Ensure keyboard focus is always clearly visible with high-contrast focus treatment.
- Maintain clear tap targets for touch devices.

## Component-Specific Expectations
- Start and game screens should feel structured as stacked blocks with clear visual rhythm.
- Board container should read as a rigid grid frame.
- BingoSquare must preserve strong state clarity for unmarked, marked, winning, and free-space tiles.
- Modal should deliver a high-contrast, direct success moment without relying on glow-heavy effects.

## Related Guidance
- For Tailwind v4 technical usage and token mechanics, follow .github/instructions/tailwind-4.instructions.md.
- Use this file for design intent and visual constraints; avoid duplicating Tailwind setup details.
