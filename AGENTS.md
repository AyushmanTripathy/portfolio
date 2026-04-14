# Design Context for Portfolio

This file guides all design work on this portfolio.

## Users
Fellow developers and recruiters browsing the portfolio. Developers appreciate the CLI aesthetic and technical details; recruiters look for skills and projects.

## Brand Personality
Technical, authentic, slightly playful. The CLI theme feels like a natural extension of a developer's environment - not forced, but genuine.

## Aesthetic Direction

### Theme
- Dark mode only
- Gray-only palette (various shades, no colors)

### Visual Elements
- Terminal/CLI aesthetic - command-line style content presentation
- Monospace typography throughout (JetBrains Mono)
- Content presented as if from a terminal (commands, output, file listings)
- Minimal decoration - no unnecessary visual elements

### Style Guidelines (DO & DON'T)

#### DO
- Use terminal-style headers (e.g., `$ cat /etc/motd`, `$ git log`)
- Present content as CLI output (JSON, git log, apt, man pages, ls -la)
- Use gray palette: #d1d5db (gray-300), #9ca3af (gray-400), #6b7280 (gray-500), #4b5563 (gray-600)
- Keep JetBrains Mono font
- Add proper indentation in code/JSON views

#### DON'T
- Use colored accents - gray only
- Add gradient text or border accents
- Use excessive borders or cards
- Center everything - prefer left-aligned terminal style

## Pages & Their CLI Themes

| Page | Header | Style |
|------|--------|-------|
| Home | `> cat /etc/motd` | JSON/object output |
| Journey | `> git log --oneline` | Git log output |
| Links | `> cat ~/.links.json` | JSON with collapsible sections |
| Movies | `> psql -c "SELECT..."` | PostgreSQL output |
| Blogs | `> man -k . \| grep` | Linux man pages |
| Nav | `> ls -la ~/pages` | Directory listing |
| Header | `$ whoami` | Terminal command output |
| Footer | `$ echo "Thanks..."` | Terminal command output |