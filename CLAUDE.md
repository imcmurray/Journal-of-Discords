# CLAUDE.md
## Instructions for Claude Code

---

## Project: Journal of Discords

This repository is a systematic effort to mine the 26-volume Journal of Discourses for statements by early LDS prophets that have been:
- Scientifically falsified
- Doctrinally disavowed
- Self-contradicting
- Failed prophecies

The goal is to create historically accurate songs that let the prophets speak for themselves.

---

## Current Status

### Completed
- ✅ Repository structure created
- ✅ All templates created
- ✅ Core topic files started (cosmology, adam-god, blood-atonement, race, polygamy)
- ✅ All 26 volumes surveyed (Research Phase)
- ✅ 26 Discovery checklists created
- ✅ 9 Crown Jewel analyses complete
- ✅ **9 Songs completed** (Song Development Phase)
- ✅ Producer Agent for autonomous orchestration
- ✅ Session Logger for progress documentation

### In Progress
- 🔄 Discovery Agent deep-reads on remaining volumes
- 🔄 Second wave of song candidates (50+ identified)

### Not Started
- ⬜ Blood atonement songs (JoD 4:53-54, etc.)
- ⬜ Adam-God songs (JoD 1:50, etc.)

### Ready to Run
Use `"Start Second Wave"` to develop next batch of song candidates.

---

## How to Continue This Project

### Quick Start
1. Read `README.md` for project overview
2. Read `METHODOLOGY.md` for processing guidelines
3. Check `index.md` for current status and priorities
4. Use agents in `agents/` folder for systematic processing

### Priority Order (Next Wave)
1. **Blood atonement** — JoD 4:53-54, 219-220 (highest priority unfinished topic)
2. **Adam-God** — JoD 1:50 (foundational doctrine, now disavowed)
3. **Gender/Authority** — JoD 5:82-86, 5:285-292 (science denial, women subjugation)
4. **Jesus Married** — JoD 2:82 (Orson Hyde claims Jesus was married)
5. **Discovery Agents** — Continue deep-reads on flagged volumes

---

## Agent System

This project uses specialized agents for different tasks. See `agents/` folder.

### Available Agents

| Agent | File | Purpose |
|-------|------|---------|
| **Producer Agent** | `agents/producer-agent.md` | **Orchestrates all agents, runs autonomously** |
| Session Logger | `agents/session-logger-agent.md` | Documents progress to session logs |
| Research Agent | `agents/research-agent.md` | Survey volumes, identify known categories |
| **Discovery Agent** | `agents/discovery-agent.md` | **Full read for anything unusual** |
| Analysis Agent | `agents/analysis-agent.md` | Deep-dive on flagged sermons |
| Song Dev Agent | `agents/song-development-agent.md` | Develop findings into song candidates |
| Song Final Agent | `agents/song-finalization-agent.md` | Complete songs with full documentation |
| Cross-Ref Agent | `agents/cross-reference-agent.md` | Build connections across corpus |

### Using the Producer Agent (Recommended)

The Producer Agent orchestrates the entire pipeline. To start a session:

```
"Run the Producer on Volume 1"
"Continue where we left off"
"Process the next 2 batches of Volume 4"
```

The Producer will:
- Survey volumes in 10-15 sermon batches
- Automatically analyze HIGH priority sermons
- Trigger song development for ★★★★★ findings
- Run cross-referencing every 5-10 analyses
- Log everything to `logs/sessions/`
- Only pause for critical blockers

### Using Individual Agents

To invoke a specific agent, read its instruction file and follow the workflow. Each agent has:
- A specific purpose
- Input requirements
- Output specifications
- Step-by-step instructions

Manual workflow (without Producer):
```
1. Run Research Agent on Volume 1
2. Run Analysis Agent on flagged sermons
3. Run Song Dev Agent on high-potential findings
4. Run Song Final Agent to complete documentation
5. Run Cross-Ref Agent to update indexes
```

---

## Key Files

| File | Purpose |
|------|---------|
| `README.md` | Project overview and mission |
| `METHODOLOGY.md` | How to process articles |
| `index.md` | Master tracking and status |
| `templates/` | Standardized templates for all document types |
| `topics/` | Cross-referenced findings by topic |
| `speakers/` | Cross-referenced findings by speaker |
| `volumes/` | Volume-by-volume analysis |
| `songs/` | Song development pipeline |
| `agents/` | Agent instruction files |
| `logs/sessions/` | Session logs from Producer runs |
| `sources/html/` | Local JoD source files (extracted from EPUBs) |
| `sources/epubs/` | Original EPUB files (backup) |
| `scripts/` | Utility scripts (e.g., extract-sources.sh) |
| `references/` | Supporting materials |

---

## Primary Source Access

### Local Sources (Primary)

Source files are stored locally in `sources/html/`:

```
sources/html/vol-XX/
├── toc.html              # Table of contents with PAGE NUMBERS
├── self_government.html  # Individual sermon files
├── celestial_marriage.html
└── ...
```

**Finding a Sermon:**
1. Open `sources/html/vol-XX/toc.html`
2. Find sermon — format: `<a href="file.html">Title</a>, by Speaker (pages)`
3. Open the linked HTML file for content

**Page Numbers:** Only in `toc.html`, not in sermon files. Example:
```
Self-Government...Adam, Our Father and Our God, by Brigham Young (46–53)
```
This sermon covers JoD 1:46-53.

**HTML Structure:**
- `<h1>` — Sermon title
- `<h2>` — Speaker name
- `<div class="intro">` — Date and location
- `<p>` — Sermon text

### Web Sources (Backup)

If local files unavailable:
- **MRM**: https://jod.mrm.org/ (searchable)
- **Archive.org**: Original scans
- **BYU Library**: https://contentdm.lib.byu.edu/digital/collection/JournalOfDiscourses3

### Citation Format

Always cite: `JoD Volume:Page` (e.g., `JoD 1:50`)

---

## Quality Standards

### Every Claim Must:
1. Trace to a specific JoD volume, page, date, and speaker
2. Include the exact quote with original spelling/punctuation
3. Note the context (setting, audience, purpose)
4. Anticipate apologetic responses

### Every Song Must:
1. Have a complete lyric-to-source mapping
2. Address likely apologetic defenses
3. Include production materials (style, caption, image prompt)
4. Be logged in `index.md` and relevant topic/speaker files

---

## Do Not:
- Quote out of context in ways that change meaning
- Rely on secondhand sources when primary sources exist
- Exaggerate claims beyond what text supports
- Ignore charitable interpretations without addressing them

## Do:
- Let the material speak for itself
- Build the strongest case from the strongest sources
- Maintain intellectual honesty
- Document thoroughly

---

## Session Workflow

When starting a work session:

1. **Check `index.md`** for current status and priorities
2. **Choose a task** based on priority order
3. **Use the appropriate agent** for that task
4. **Update `index.md`** when complete
5. **Commit changes** with descriptive message

Suggested commit message format:
```
[AREA] Brief description

- Detail 1
- Detail 2

Closes #issue (if applicable)
```

Examples:
```
[VOL-01] Complete volume survey

- Flagged 12 sermons for analysis
- Adam-God (1:50) highest priority
- Updated index.md

[SONG] Complete "Adam Is Our God"

- Full lyrics with source mapping
- Apologetic responses addressed
- Added to index and topic files
```

---

## Questions?

If unclear on how to proceed:
1. Check the relevant agent instruction file
2. Review `METHODOLOGY.md` for guidelines
3. Look at completed examples in `songs/completed/`
4. When in doubt, document more rather than less

---

*"The remedy can never be applied, unless the disease is known."*
