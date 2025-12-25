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
2. **Access to JoD text** (https://jod.mrm.org/)
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

Go to https://jod.mrm.org/[volume_number]

Example: https://jod.mrm.org/1 for Volume 1

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

## Search Strategy

### Efficient Keyword Searching

Use browser Ctrl+F or site search for:

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

## Handoff

After completing a volume survey:

1. **Commit the summary file**
2. **Update index.md**
3. **Flag highest priority sermons for Analysis Agent**
4. **Note any cross-volume connections discovered**

The Analysis Agent will then deep-dive on individual flagged sermons.

---

## Example Output

See `volumes/vol-13/summary.md` for an example of a (partial) volume survey.

---

*"The remedy can never be applied, unless the disease is known."*
