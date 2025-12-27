# Journal of Discords
## Mining the Journal of Discourses for Prophetic Problems

---

## Mission

Systematically identify and document statements by early LDS prophets that have been:
- **Scientifically falsified** (e.g., sun/moon inhabitants)
- **Doctrinally disavowed** (e.g., Adam-God, blood atonement)
- **Self-contradicting** (e.g., "never abandon polygamy" → 1890 Manifesto)
- **Failed prophecies** (e.g., "never get a man into space")

Then transform these findings into historically accurate songs that let the prophets speak for themselves.

---

## Why the Journal of Discourses?

The Journal of Discourses is a 26-volume collection of over 1,500 sermons delivered by early LDS leaders between 1854 and 1886.

**Distribution:** Published in Liverpool, England and sold worldwide as a **subscription publication**—a semi-monthly periodical members purchased to receive prophetic sermons unavailable through the Deseret News.

**Official Endorsement:** The First Presidency (Brigham Young, Heber C. Kimball, and Willard Richards) issued a letter dated June 1, 1853 encouraging all Saints to purchase the publication. In 1861, apostle George Q. Cannon wrote in Volume 8's preface:

> "The Journal of Discourses deservedly ranks as one of the standard works of the Church, and every rightminded Saint will certainly welcome with joy every Number as it comes forth from the press as an additional reflector of 'the light that shines from Zion's hill.'"

**Then and Now:** George Q. Cannon called the Journal "an additional reflector of 'the light that shines from Zion's hill.'" Today, the LDS Church states it "is not an authoritative source of Church doctrine." This raises an important question: if these teachings were authoritative enough to be sold as prophetic light to members worldwide for 35 years, shaping beliefs about race, marriage, and salvation across generations, what responsibility exists for the real-world impact of those teachings?

This project documents what was taught—in the prophets' own words—so that history is not quietly revised away.

---

## Repository Structure

```
jod-project/
├── CLAUDE.md              # Instructions for Claude Code
├── README.md              # This file
├── METHODOLOGY.md         # How to process articles
├── index.md               # Master tracking and status
│
├── agents/                # Agent instruction files
│   ├── research-agent.md
│   ├── analysis-agent.md
│   ├── song-development-agent.md
│   ├── song-finalization-agent.md
│   └── cross-reference-agent.md
│
├── volumes/               # Volume-by-volume analysis
│   ├── vol-01/
│   │   ├── summary.md
│   │   └── findings/
│   ├── vol-02/
│   │   └── ...
│   └── vol-26/
│
├── topics/                # Findings organized by topic
│   ├── cosmology.md
│   ├── adam-god.md
│   ├── blood-atonement.md
│   ├── race.md
│   ├── polygamy.md
│   └── authority-claims.md
│
├── speakers/              # Findings organized by speaker
│   ├── brigham-young.md
│   ├── john-taylor.md
│   └── ...
│
├── songs/                 # Song development pipeline
│   ├── completed/         # Finished songs with full documentation
│   ├── in-progress/       # Songs being developed
│   └── candidates/        # Promising material not yet developed
│
├── references/            # Supporting materials
│   ├── apologetic-responses.md
│   ├── timeline.md
│   └── sources.md
│
└── templates/             # Standardized templates
    ├── sermon-analysis.md
    ├── song-candidate.md
    └── completed-song.md
```

---

## Quick Start

1. **Read `CLAUDE.md`** for orientation
2. **Check `index.md`** for current status and priorities
3. **Use agents in `agents/`** for systematic processing
4. **Follow `METHODOLOGY.md`** for quality standards

---

## Processing Pipeline

```
┌─────────────────────────────────────────────────────────────────┐
│  STAGE 1: SURVEY (Research Agent)                               │
│  - Quick-read each volume                                       │
│  - Flag sermons with potential material                         │
│  - Create volume summary                                        │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  STAGE 2: ANALYSIS (Analysis Agent)                             │
│  - Deep-dive on flagged sermons                                 │
│  - Extract exact quotes with citations                          │
│  - Categorize findings                                          │
│  - Anticipate apologetic responses                              │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  STAGE 3: CROSS-REFERENCE (Cross-Reference Agent)               │
│  - Update topic files                                           │
│  - Update speaker files                                         │
│  - Identify patterns and connections                            │
│  - Flag song opportunities                                      │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  STAGE 4: SONG DEVELOPMENT (Song Development Agent)             │
│  - Identify hooks and structure                                 │
│  - Draft lyrics                                                 │
│  - Map to sources                                               │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  STAGE 5: FINALIZATION (Song Finalization Agent)                │
│  - Complete source mapping                                      │
│  - Write apologetic responses                                   │
│  - Create production materials                                  │
│  - Update all cross-references                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Finding Categories

| Code | Category | Description | Example |
|------|----------|-------------|---------|
| FALSIFIED | Scientifically Disproven | Claims contradicted by evidence | Sun inhabitants |
| DISAVOWED | Doctrinally Abandoned | Church no longer teaches | Adam-God doctrine |
| SELF-CONTRA | Self-Contradiction | Speaker/institution contradicts itself | Polygamy essential → abandoned |
| FAILED-PROPH | Failed Prophecy | Time-bound prediction didn't occur | JFS space prophecy |
| CONTRA-MODERN | Contradicts Modern Teaching | Conflicts with current doctrine | Blood atonement |
| MORAL-PROBLEM | Ethically Condemned | Problematic by modern standards | Racial teachings |

---

## Song Potential Rating

| Rating | Meaning | Action |
|--------|---------|--------|
| ★★★★★ | Perfect material | Develop immediately |
| ★★★★☆ | Strong material | High priority |
| ★★★☆☆ | Moderate material | May combine with others |
| ★★☆☆☆ | Weak material | Archive for reference |
| ★☆☆☆☆ | Not usable | Document and move on |

---

## Primary Source Access

| Source | URL | Notes |
|--------|-----|-------|
| MRM | https://jod.mrm.org/ | Recommended - clean, searchable |
| Archive.org | https://archive.org/search?query=journal+of+discourses | Original scans |
| BYU Library | https://contentdm.lib.byu.edu/digital/collection/JournalOfDiscourses3 | Academic resource |
| Wikisource | https://en.wikisource.org/wiki/Journal_of_Discourses | Wikified text |

---

## Core Principles

### 1. Primary Sources Only
Every claim must trace to a specific JoD volume, page, date, and speaker. No relying on secondhand characterizations.

### 2. Let Them Speak
The prophets are more damning in their own words than in ours. Prioritize direct quotation over interpretation.

### 3. Full Documentation
Every song gets a companion document with complete source mapping, historical context, and apologetic responses.

### 4. Charitable Reading First
Note reasonable interpretations before flagging material. Strengthen the case by addressing the best defenses.

### 5. Their Own Standards
Hold the prophets to the standards they set for themselves. Use their definitions, their authority claims, their predictions.

---

## Current Status

See `index.md` for detailed tracking.

**Summary:**
- Volumes Surveyed: 26/26 (COMPLETE)
- Songs Completed: 9 (all crown jewels)
- Next Wave Candidates: 50+

---

## Estimated Scope

| Item | Estimate |
|------|----------|
| Total Volumes | 26 |
| Total Sermons | ~1,438 |
| Volume Survey Time | 2-4 hours each |
| Sermon Analysis Time | 30-60 minutes each |
| Song Development Time | 2-4 hours each |
| **Projected Song Yield** | **50-100 songs** |

This is a marathon, not a sprint.

---

## License

This is a research and creative project. The Journal of Discourses is in the public domain. Original analysis and lyrics are provided for educational and artistic purposes.

---

## Contributing

This project uses a systematic methodology. To contribute:

1. Follow the agent workflows
2. Use the templates
3. Maintain documentation standards
4. Update cross-references

---

*"The remedy can never be applied, unless the disease is known."*
— Nauvoo Expositor, June 7, 1844
