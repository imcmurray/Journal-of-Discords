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
- ✅ Volume 13 partial analysis (one sermon)
- ✅ One song completed: "Who Are the Real Fanatics?" (JoD 13:268-274)

### In Progress
- 🔄 Volume 1 survey (priority: contains Adam-God doctrine at JoD 1:50)

### Not Started
- ⬜ Volumes 2-12, 14-26 surveys
- ⬜ Systematic sermon analysis
- ⬜ Song development pipeline

---

## How to Continue This Project

### Quick Start
1. Read `README.md` for project overview
2. Read `METHODOLOGY.md` for processing guidelines
3. Check `index.md` for current status and priorities
4. Use agents in `agents/` folder for systematic processing

### Priority Order
1. **Volume 1** — Contains Adam-God (JoD 1:50), foundational material
2. **Volume 4** — Contains blood atonement (JoD 4:53-54, 219-220)
3. **Volume 10** — Contains racial teachings (JoD 10:110)
4. **Volume 13** — Complete the survey (we only did one sermon)
5. **Remaining volumes** — Systematic processing

---

## Agent System

This project uses specialized agents for different tasks. See `agents/` folder.

### Available Agents

| Agent | File | Purpose |
|-------|------|---------|
| Research Agent | `agents/research-agent.md` | Survey volumes, identify problematic content |
| Analysis Agent | `agents/analysis-agent.md` | Deep-dive on flagged sermons |
| Song Dev Agent | `agents/song-development-agent.md` | Develop findings into song candidates |
| Song Final Agent | `agents/song-finalization-agent.md` | Complete songs with full documentation |
| Cross-Ref Agent | `agents/cross-reference-agent.md` | Build connections across corpus |

### Using Agents

To invoke an agent, read its instruction file and follow the workflow. Each agent has:
- A specific purpose
- Input requirements
- Output specifications
- Step-by-step instructions

Example workflow:
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
| `references/` | Supporting materials |

---

## Primary Source Access

The Journal of Discourses is available at:
- **MRM**: https://jod.mrm.org/ (recommended - clean, searchable)
- **Archive.org**: Original scans
- **BYU Library**: https://contentdm.lib.byu.edu/digital/collection/JournalOfDiscourses3

When processing, always cite: `JoD Volume:Page`

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
