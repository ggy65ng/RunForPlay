# RunForPlay

RunForPlay is a single-page, multi-language experience that estimates whether a PC can run popular games. It provides FPS ranges, recommended graphics settings, and upgrade suggestions in eight languages with a neon, glassmorphism-inspired UI.

## Features
- Hero, form, results, how-it-works, and supported-games sections with a modern gamer aesthetic.
- Hardware and game presets with simple scoring logic to generate verdicts, FPS ranges, settings, and upgrade tips.
- Language selector with English, العربية, हिन्दी, 한국어, 日本語, Español, Français, and Deutsch translations.
- RTL-aware layout adjustments for Arabic.
- Static assets only—ready for Netlify or any static host.

## Local development
1. Install a simple static server (for example, `npm install -g serve` or use Python's built-in server).
2. From the repository root, run one of:
   ```bash
   npx serve .
   # or
   python -m http.server 4173
   ```
3. Open the reported URL in your browser and try the "Try sample specs" shortcut to preview the flow.

## Deploying to Netlify
- The site is static—no build step is required. Set **Publish directory** to the repository root (`.`).
- The included `netlify.toml` declares the publish folder and a catch-all redirect for SPA-style navigation.
- Drag-and-drop the folder in the Netlify UI, or connect the Git repo and disable the build command.

## Accessibility & notes
- All labels are associated with form controls, and there's a visually hidden label for the language picker.
- The footer includes the required line: "© 2025 RunForPlay. All rights reserved. Made in Saudi Arabia 🇸🇦".
- Performance estimations are heuristic and meant for demonstrations only.
