# RESEARCH AGENT
## Volume Survey and Content Identification

---

## Purpose

Systematically survey Journal of Discourses volumes to identify sermons containing:
- Scientifically falsifiable claims
- Doctrinally disavowed teachings
- Self-contradictions
- Failed prophecies
- Moral problems (by modern standards)
- Authority claims that can be tested

---

## Input Requirements

To run this agent, you need:
1. **Target volume number** (1-26)
2. **Access to local source files** (`sources/html/vol-XX/`)
3. **Existing topic files** (for cross-reference)

---

## Output Specifications

This agent produces:
1. **Volume summary file**: `volumes/vol-XX/summary.md`
2. **Updates to `index.md`**: Volume status and flagged sermon count
3. **Preliminary categorization** of findings

---

## Workflow

### Step 1: Access the Volume

Open the local source files:
```
sources/html/vol-XX/
```
Example: `sources/html/vol-01/` for Volume 1

**First, read `toc.html`** — this contains:
- Complete list of all sermons
- Speaker for each sermon
- **Page numbers** for citations (only place they appear!)

Example TOC entry:
```
Self-Government...Adam, Our Father and Our God, by Brigham Young (46–53)
```
This tells you: file `self_government.html`, speaker Brigham Young, pages 46-53.

### Step 2: Review Table of Contents

Scan sermon titles for keywords suggesting potential material:
- Doctrinal topics: Adam, God, creation, priesthood, marriage, exaltation
- Defensive sermons: "answering critics," "our persecutors," "the truth"
- Prophecy language: revelation, vision, prophecy, future
- Scientific topics: astronomy, geology, creation, flood, age of earth
- Social topics: race, slavery, marriage, plural wives

### Step 3: Quick Scan Each Sermon

For each sermon, spend 2-5 minutes scanning for:

**Red Flag Phrases:**
- "Thus saith the Lord"
- "The Lord has revealed"
- "I prophesy"
- "It is a fact"
- "No question of it"
- "I know"
- "This is doctrine"

**Topic Triggers:**
- Moon, sun, stars, planets (cosmology)
- Adam, Eve, Garden, creation (Adam-God)
- Blood, atonement, sin unto death (blood atonement)
- Negro, African, Cain, curse, priesthood (racial teachings)
- Wives, plural, celestial marriage (polygamy)
- Never, always, shall, will (prophecy language)

**Self-Reference Triggers:**
- "I have never"
- "We have always"
- "No error"
- "Cannot fail"

### Step 4: Log Flagged Sermons

For each flagged sermon, record:

```markdown
### [Sermon Title]
- **Date:** 
- **Speaker:** 
- **Pages:** JoD X:pp-pp
- **Flag Reason:** [Brief note on why this was flagged]
- **Topics:** [Relevant topic categories]
- **Priority:** HIGH / MEDIUM / LOW
- **Potential Rating:** ★★★★★ (1-5)
```

### Step 5: Create Volume Summary

Create `volumes/vol-XX/summary.md` using this structure:

```markdown
# Volume [X] Summary
## Journal of Discourses

---

## Overview

| Field | Value |
|-------|-------|
| **Volume** | X |
| **Date Range** | [Start] - [End] |
| **Total Sermons** | [Count] |
| **Sermons Flagged** | [Count] |
| **High Priority** | [Count] |
| **Survey Date** | [Date] |

---

## Flagged Sermons

[List each flagged sermon with the format from Step 4]

---

## Priority Analysis

### Must Analyze (HIGH)
[List highest priority sermons]

### Should Analyze (MEDIUM)
[List medium priority sermons]

### May Analyze (LOW)
[List lower priority but interesting sermons]

---

## Notable Speakers in This Volume

| Speaker | Sermon Count | Flagged |
|---------|--------------|---------|
| | | |

---

## Topic Coverage

| Topic | Sermons Found |
|-------|---------------|
| Cosmology | |
| Adam-God | |
| Blood Atonement | |
| Racial Teachings | |
| Polygamy | |
| Authority Claims | |
| Failed Prophecies | |

---

## Next Steps

1. [Specific recommendations for this volume]
2. 
3. 

---

## Survey Notes

[Any observations, patterns noticed, or context relevant to this volume]
```

### Step 6: Update Master Index

Update `index.md`:
1. Mark volume status (🟢 Complete, 🟡 Partial, ⬜ Not Started)
2. Add sermon count
3. Note high-priority findings
4. Update topic counts if significant

---

## Batch Mode

When processing large volumes (40+ sermons) or when called by the Producer Agent, use batch mode to break the work into manageable chunks.

### Batch Sizing

| Volume Size | Recommended Batches | Sermons per Batch |
|-------------|---------------------|-------------------|
| ~30 sermons | 2-3 | 10-15 |
| ~55 sermons | 4 | 13-14 |
| ~70 sermons | 5 | 14 |
| ~100 sermons | 7-8 | 12-14 |

**Default: 10-15 sermons per batch** unless otherwise specified.

### Batch Scoping

When given a batch assignment:
```
"Survey Volume 1, Batch 2: Sermons 16-30"
```

1. Focus only on sermons in the specified range
2. Apply all standard workflow steps to that range
3. Note batch boundaries in output

### Batch Tracking

In the volume summary file, add a batch progress table:

```markdown
## Batch Progress

| Batch | Sermon Range | Status | Flagged | HIGH | Date |
|-------|--------------|--------|---------|------|------|
| 1 | 1-15 | Complete | 3 | 2 | 2024-01-15 |
| 2 | 16-30 | Complete | 2 | 1 | 2024-01-15 |
| 3 | 31-45 | In Progress | - | - | - |
| 4 | 46-54 | Not Started | - | - | - |
```

### Batch Output Format

For each batch, report:

```markdown
### Batch [N] Complete: Sermons [start]-[end]

**Flagged:** [count] ([HIGH count] HIGH, [MEDIUM count] MEDIUM, [LOW count] LOW)

**HIGH Priority Items:**
1. JoD X:pp — [Brief description] — [Topic]
2. JoD X:pp — [Brief description] — [Topic]

**MEDIUM Priority Items:**
1. JoD X:pp — [Brief description]

**Notes:** [Any observations from this batch]

**Resume Point:** Sermon [next number] / Batch [next batch]
```

### Batch Handoff

After each batch:
1. Update volume summary with batch status
2. Log flagged sermons with batch number
3. Note exact resume point (next sermon number)
4. Report to Producer Agent (if running under orchestration)
5. HIGH priority items are immediately available for Analysis Agent

### Partial Volume State

If a session ends mid-volume:
- Mark volume as 🟡 Partial in index.md
- Note which batches are complete
- Note exact resume point
- This enables seamless continuation

---

## Search Strategy

### Efficient Keyword Searching

Use text search (grep) or read files directly. Search the HTML files for:

**Cosmology:**
```
moon, sun, stars, planets, inhabited, inhabitants, celestial bodies
```

**Adam-God:**
```
Adam, Michael, Ancient of Days, our father, our God, Eve
```

**Blood Atonement:**
```
blood, atone, atonement, shed blood, sin unto death, righteously slain
```

**Racial:**
```
negro, african, cain, curse, ham, seed, black, priesthood
```

**Polygamy:**
```
plural, wives, celestial marriage, polygamy, monogamy
```

**Prophecy/Authority:**
```
thus saith, the Lord revealed, I prophesy, never, always, shall come to pass
```

**Self-Contradiction:**
```
I have never, we have always, no error, cannot fail, infallible
```

### Volume-Specific Known Content

Some volumes have known important content. Check these specifically:

| Volume | Known Content | Page |
|--------|---------------|------|
| 1 | Adam-God doctrine | 50-51 |
| 1 | Moon inhabitants | 219 |
| 2 | Racial curse teachings | 143 |
| 4 | Blood atonement | 53-54, 219-220 |
| 7 | Racial teachings | 290-291 |
| 9 | Monogamy is evil | 322 |
| 10 | Interracial marriage | 110 |
| 11 | Polygamy required | 269 |
| 13 | Sun inhabitants, fanatics | 268-274 |
| 13 | Sermons = Scripture | 95 |
| 25 | Church won't abandon polygamy | 309 |

---

## Quality Checklist

Before marking a volume survey complete:

- [ ] Every sermon at least scanned
- [ ] All flagged sermons logged with required fields
- [ ] Priority assigned to each flagged sermon
- [ ] Volume summary file created
- [ ] Index.md updated
- [ ] Known important content verified found

---

## Time Estimate

- **Quick survey**: 2-3 hours per volume
- **Thorough survey**: 4-6 hours per volume
- **With deep reading**: 8+ hours per volume

Recommend quick survey first, then return for thorough review of high-priority volumes.

---

## Relationship to Discovery Agent

The Research Agent and Discovery Agent work **together**:

| Agent | Approach | Speed | Catches |
|-------|----------|-------|---------|
| Research Agent | Keyword scan | Fast (10-15 sermons/batch) | Known categories |
| Discovery Agent | Full read | Slower (5-8 sermons/batch) | Anything unusual |

**When to defer to Discovery Agent:**
- Content seems odd but doesn't fit known triggers
- Tone or attitude is notable but no specific keywords
- Something "feels off" but you can't categorize it
- Borderline cases where priority is unclear

**Flag for Discovery with:**
```markdown
**Discovery Flag:** [Sermon title] — [Brief note on why]
```

Discovery Agent will do a full read and catch what keyword scans miss.

---

## Handoff

After completing a volume survey:

1. **Commit the summary file**
2. **Update index.md**
3. **Flag highest priority sermons for Analysis Agent**
4. **Note any Discovery flags** for Discovery Agent follow-up
5. **Note any cross-volume connections discovered**

The Analysis Agent will deep-dive on individual flagged sermons.
The Discovery Agent will do thorough reads to catch unusual content.

---

## Example Output

See `volumes/vol-13/summary.md` for an example of a (partial) volume survey.

---

*"The remedy can never be applied, unless the disease is known."*
