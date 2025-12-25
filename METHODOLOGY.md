# METHODOLOGY
## How to Process Journal of Discourses Articles

---

## Overview

This document provides step-by-step guidance for processing JoD content systematically. Follow these guidelines to maintain quality and consistency across the project.

---

## Phase 1: Volume Survey

**Agent:** Research Agent (`agents/research-agent.md`)

**Goal:** Quickly scan an entire volume to identify sermons worth deeper analysis.

### Process

1. **Access the volume** at https://jod.mrm.org/[volume_number]

2. **Scan sermon titles** for red-flag topics:
   - Doctrinal: Adam, God, creation, priesthood, marriage, exaltation
   - Scientific: astronomy, creation, geology, age of earth
   - Social: race, slavery, polygamy, blood atonement
   - Prophetic: prophecy, revelation, vision, future events

3. **Quick-read each sermon** (2-5 minutes):
   - Look for certainty language: "thus saith the Lord," "no question," "I know"
   - Look for falsifiable claims
   - Look for doctrines now abandoned
   - Look for self-referential claims ("I have never," "we have always")

4. **Log flagged sermons** with:
   - Date, speaker, pages
   - Brief note on why flagged
   - Topic categories
   - Priority rating (HIGH/MEDIUM/LOW)
   - Song potential (★ rating)

5. **Create volume summary**: `volumes/vol-XX/summary.md`

6. **Update `index.md`** with volume status

### Time Estimate
- Quick survey: 2-3 hours per volume
- Thorough survey: 4-6 hours per volume

---

## Phase 2: Sermon Analysis

**Agent:** Analysis Agent (`agents/analysis-agent.md`)

**Goal:** Deep-dive on flagged sermons to extract usable material.

### Process

1. **Read the full sermon** — not just excerpts. Understand:
   - Overall purpose and thesis
   - Rhetorical structure
   - Audience and occasion
   - Any qualifications or hedging

2. **Second read — extraction mode:**
   - Mark definitive claims
   - Mark authority assertions
   - Mark prophetic predictions
   - Mark self-referential statements
   - Mark morally problematic content

3. **Extract quotes** with:
   - Exact text (preserve original spelling/punctuation)
   - Precise citation (JoD Volume:Page)
   - Context notes
   - Category assignment

4. **Contextual analysis:**
   - Setting (General Conference, local meeting, etc.)
   - Speaker's role at the time
   - Historical circumstances
   - Charitable interpretation check

5. **Categorize the finding:**
   - Primary category (FALSIFIED, DISAVOWED, etc.)
   - Secondary categories if applicable
   - Topic tags

6. **Self-contradiction check:**
   - Internal to this sermon?
   - Across this speaker's other sermons?
   - Across the institution?

7. **Anticipate apologetics:**
   - What will defenders say?
   - Why does the source material defeat that defense?

8. **Rate song potential** with justification

9. **Create analysis file**: `volumes/vol-XX/findings/YYYY-MM-DD-sermon-title.md`

10. **Update cross-references** (topic files, speaker files)

### Time Estimate
- Standard analysis: 30-60 minutes per sermon
- Complex sermon: 1-2 hours

---

## Phase 3: Cross-Referencing

**Agent:** Cross-Reference Agent (`agents/cross-reference-agent.md`)

**Goal:** Build connections that strengthen the overall case.

### Process

1. **After each analysis**, update:
   - Relevant topic file(s) in `topics/`
   - Relevant speaker file(s) in `speakers/`
   - `index.md` tracking

2. **Look for connection types:**
   - Confirmation (multiple sources saying same thing)
   - Contradiction (speaker/institution contradicting itself)
   - Escalation (teaching getting more extreme)
   - Definition-Violation (setting then failing a standard)
   - Authority-Error (strong claim paired with error)
   - Prophecy-Failure (prediction + non-occurrence)

3. **Document significant connections** in relevant files

4. **Flag song opportunities** that emerge from combinations

### Time Estimate
- Per-analysis updates: 10-15 minutes
- Periodic review: 1-2 hours

---

## Phase 4: Song Development

**Agent:** Song Development Agent (`agents/song-development-agent.md`)

**Goal:** Transform findings into song candidates.

### Process

1. **Identify the hook:**
   - What's the most quotable phrase?
   - What self-set standard does the speaker violate?
   - What captures the irony?

2. **Choose a structure:**
   - Setup-Payoff
   - Self-Definition (define standard → violate it)
   - Prophecy-Failure
   - Authority-Error
   - Comparison (turned around)

3. **Draft chorus first** — it must be:
   - Immediately memorable
   - Contain the hook
   - Work when repeated

4. **Draft verses:**
   - Verse 1: Setup
   - Verse 2: Development
   - Verse 3: Payoff
   - Each verse advances the narrative

5. **Draft bridge** — the one place for more freedom

6. **Map every line to sources** (or mark as original bridge material)

7. **Note style direction:**
   - Tone (sardonic, mournful, angry, wry)
   - Genre (folk, rock, blues)
   - Comparable songs

8. **Create candidate file**: `songs/candidates/[song-title].md`

### Time Estimate
- Initial development: 1-2 hours
- Revision and refinement: 1-2 additional hours

---

## Phase 5: Song Finalization

**Agent:** Song Finalization Agent (`agents/song-finalization-agent.md`)

**Goal:** Complete all documentation and production materials.

### Process

1. **Finalize lyrics:**
   - Check accuracy against sources
   - Test singability (read aloud)
   - Add section tags

2. **Complete source mapping:**
   - Every line traced to source
   - Types marked (Quote, Paraphrase, Original)

3. **Write historical context:**
   - Setting and speaker
   - Broader context
   - Why it matters
   - Aftermath

4. **Write apologetic responses:**
   - Minimum 3, ideally 5
   - Steel-man the defense
   - Show why it fails
   - Provide source-based rebuttal

5. **Document logical structure:**
   - How the argument works
   - The self-refuting element

6. **Create Suno materials:**
   - Style tags (under 120 chars)
   - Caption (under 500 chars)
   - Image prompts (2-3 options)

7. **Verify everything:**
   - Re-read original sources
   - Check all citations
   - Confirm fairness

8. **Create completed file**: `songs/completed/[song-title].md`

9. **Update all cross-references**

### Time Estimate
- Finalization: 1-2 hours
- Total song (development + finalization): 2-4 hours

---

## Documentation Standards

### Quote Formatting

Use blockquotes with attribution:

```markdown
> "Exact quote with original spelling and punctuation preserved."
> — Speaker Name, JoD Volume:Page (Date)
```

### Citation Format

Standard: `JoD Volume:Page`
- Example: `JoD 13:271`

With date: `JoD Volume:Page (Month Day, Year)`
- Example: `JoD 13:271 (July 24, 1870)`

### File Naming

**Sermon analyses:**
`YYYY-MM-DD-brief-title.md`
- Example: `1870-07-24-gospel-one-man-power.md`

**Songs:**
`song-title-lowercase-hyphenated.md`
- Example: `who-are-the-real-fanatics.md`

---

## Quality Checklists

### Sermon Analysis Complete When:
- [ ] Full sermon read (not just excerpts)
- [ ] All significant quotes extracted
- [ ] Context documented
- [ ] Categories assigned
- [ ] Self-contradiction check done
- [ ] Apologetics anticipated (minimum 3)
- [ ] Song potential rated
- [ ] Analysis file created
- [ ] Topic file(s) updated
- [ ] Speaker file updated
- [ ] Index updated

### Song Complete When:
- [ ] Lyrics finalized with section tags
- [ ] 100% source mapping complete
- [ ] Historical context thorough
- [ ] Apologetic responses comprehensive (minimum 3)
- [ ] Logical structure documented
- [ ] Producer notes written
- [ ] Suno materials ready (style, caption, image prompts)
- [ ] All cross-references updated
- [ ] Accuracy verified against sources

---

## Red Flags to Avoid

### Don't:
- Quote out of context in ways that change meaning
- Rely on secondhand sources when primary sources exist
- Exaggerate claims beyond what text supports
- Ignore charitable interpretations without addressing them
- Force irony that isn't there
- Combine quotes from different contexts as if they're one statement

### Do:
- Let the material speak for itself
- Build the strongest case from the strongest sources
- Acknowledge when a charitable reading exists (then explain why it fails)
- Maintain intellectual honesty
- Document thoroughly
- Use their words, their standards, their definitions

---

## Efficiency Tips

### Keyword Searching

Use browser Ctrl+F for quick scanning:

**Cosmology:** moon, sun, stars, planets, inhabited
**Adam-God:** Adam, Michael, Ancient of Days, our father
**Blood Atonement:** blood, atone, shed blood, sin unto death
**Racial:** negro, african, cain, curse, ham, black
**Polygamy:** plural, wives, celestial marriage
**Authority:** thus saith, Lord revealed, prophesy

### Known High-Value Content

Check these specifically:

| Volume | Content | Pages |
|--------|---------|-------|
| 1 | Adam-God doctrine | 50-51 |
| 1 | Moon inhabitants | 219 |
| 4 | Blood atonement | 53-54, 219-220 |
| 10 | Interracial marriage | 110 |
| 11 | Polygamy required | 269 |
| 13 | Sun inhabitants | 271 |
| 13 | Sermons = Scripture | 95 |
| 25 | Won't abandon polygamy | 309 |

### Reading Strategy

1. **First pass:** Scan titles and opening paragraphs
2. **Second pass:** Read flagged sermons fully
3. **Third pass:** Deep analysis of high-potential material

---

## When Stuck

1. **Check similar completed work** in `songs/completed/`
2. **Review the relevant agent file** for detailed guidance
3. **Consult topic files** for patterns and precedents
4. **When in doubt, document more** rather than less
5. **If a finding is ambiguous, note the ambiguity** — don't force it

---

*"The remedy can never be applied, unless the disease is known."*
