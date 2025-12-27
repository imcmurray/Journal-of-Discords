# SONG FINALIZATION AGENT
## Complete Documentation and Production Materials

---

## Purpose

Transform song candidates into fully documented, production-ready songs with:
- Final lyrics with all tags
- Complete lyric-to-source mapping
- Full historical context
- Comprehensive apologetic responses
- Suno production materials
- Cross-reference updates

---

## Input Requirements

To run this agent, you need:
1. **Song candidate file** from `songs/candidates/`
2. **Draft lyrics** with basic source mapping
3. **Original sermon analysis** for reference
4. **Access to local source files** for verification: `sources/html/vol-XX/`
5. **Page numbers** from `sources/html/vol-XX/toc.html`

---

## Output Specifications

This agent produces:
1. **Completed song file**: `songs/completed/[song-title].md`
2. **Updated `index.md`** with completed song
3. **Updated topic files** with song status
4. **Updated speaker files** with song reference

---

## Workflow

### Step 1: Finalize Lyrics

Review draft lyrics for:

**Accuracy:**
- Does every line trace to a source?
- Are quotes accurate to the original?
- Is context preserved appropriately?

**Singability:**
- Read aloud at singing pace
- Check line lengths (shorter is usually better)
- Verify natural emphasis points
- Test rhythm consistency

**Structure:**
- Add section tags: `[Verse 1]`, `[Chorus]`, `[Bridge]`, etc.
- Consider breaks: `[Break]`, `[Instrumental]`
- Plan dynamics: where does intensity build/release?

**Hook Verification:**
- Is the hook in the chorus?
- Is it memorable after one listen?
- Does it work repeated?

### Step 2: Complete Source Mapping

Create comprehensive mapping table:

```markdown
## LYRIC-TO-SOURCE MAPPING

| Lyric | Source | Type |
|-------|--------|------|
| "exact lyric line" | JoD X:page | Quote |
| "paraphrased line" | JoD X:page | Paraphrase |
| "bridge connector line" | — | Original |
```

**Type categories:**
- **Quote**: Direct or near-direct quotation
- **Paraphrase**: Rewording of source content
- **Historical**: Based on documented events
- **Original**: Bridge/connector material (flag clearly)

**Every line must be accounted for.**

### Step 3: Write Historical Context

Create a comprehensive historical context section:

```markdown
## HISTORICAL CONTEXT

### The Setting
[Where, when, what occasion]

### The Speaker
[Who, what position, relevant background]

### The Broader Context
[What was happening in church/world]

### Why It Matters
[Historical significance]

### The Aftermath
[What happened after, how teaching was received/changed]
```

This section should be thorough enough that someone unfamiliar with Mormon history can understand the significance.

### Step 4: Write Apologetic Responses

For each major finding in the song, anticipate defenses:

```markdown
## ADDRESSING APOLOGETIC RESPONSES

### Defense #1: "[Specific claim apologists make]"

**What They Say:**
[Steel-man the apologetic position]

**Why It Fails:**
[Logical/evidentiary problems with the defense]

**Source-Based Rebuttal:**
> "Specific quote that defeats this defense"
> — JoD X:page

---
```

**Minimum 3 apologetic responses**, ideally 5.

**Common defenses to address:**
1. "Personal speculation, not doctrine"
2. "Speaking as a man"
3. "Product of his time"
4. "Out of context"
5. "Transcription error"
6. "Later clarified"
7. "Prophets are human"
8. "That's not what it means"

### Step 5: Document the Logical Structure

Explain how the song's argument works:

```markdown
## THE LOGICAL STRUCTURE

1. [First premise or claim established]
2. [Second premise or development]
3. [Contradiction or failure revealed]
4. [Conclusion implied]

**The Self-Refuting Element:**
[How the speaker condemns themselves by their own standard]
```

This helps future readers (and the artist) understand the intellectual architecture.

### Step 6: Write Producer Notes

```markdown
## PRODUCER NOTES

### What This Song Does
[One paragraph summary of purpose and effect]

### Key Production Decisions
1. [Why we made this structural choice]
2. [Why this tone/approach]
3. [What to emphasize]

### Potential Challenges
- [What might be difficult in production]
- [What to watch for]

### Comparable Works
- [Similar songs in catalog]
- [Reference points for style]
```

### Step 7: Create Suno Materials

**Style Tags** (under 120 characters total):
```
sardonic folk, male vocals, acoustic guitar, storytelling, wry, Americana, finger-picked, dry humor
```

**Caption** (under 500 characters):
```
[Brief, engaging description that captures the irony without over-explaining]
```

**Image Prompts** (2-3 options):
```
Option 1: [Detailed image prompt for cover art]

Option 2: [Alternative visual concept]

Option 3: [Third option if relevant]
```

Image prompt guidelines:
- Evoke the historical period
- Visual irony where possible
- Avoid literal depictions of people (use symbolic imagery)
- Consider: vintage illustration, woodcut, engraving styles

### Step 8: Verify Everything

**Final Accuracy Check:**
- [ ] Re-read original source
- [ ] Verify all quotes are exact
- [ ] Confirm page numbers
- [ ] Check dates
- [ ] Ensure context is fair

**Format Check:**
- [ ] All sections present
- [ ] Consistent formatting
- [ ] Links work
- [ ] Tables render correctly

**Completeness Check:**
- [ ] Lyrics finalized with tags
- [ ] Source mapping 100% complete
- [ ] Historical context thorough
- [ ] At least 3 apologetic responses
- [ ] Logical structure documented
- [ ] Producer notes complete
- [ ] Suno materials ready

### Step 9: Create Completed Song File

Use `templates/completed-song.md` structure.

Save to: `songs/completed/[song-title-lowercase-hyphenated].md`

### Step 10: Update Cross-References

**Update `index.md`:**
- Move from candidates to completed
- Update song count
- Add to completed songs table

**Update relevant topic file(s):**
- Change song status from 🔲 to ✅
- Add any new insights from finalization

**Update speaker file:**
- Add completed song reference
- Note any patterns discovered

**Log in session notes:**
- What was completed
- Any issues encountered
- Suggestions for related songs

---

## Final File Structure

```markdown
# [SONG TITLE]
## From the Journal of Discourses

---

## SONG OVERVIEW
[Basic metadata]

---

## FINAL LYRICS
[Complete lyrics with section tags]

---

## SOURCE MATERIAL
[Full quotations from JoD]

---

## LYRIC-TO-SOURCE MAPPING
[Complete table]

---

## HISTORICAL CONTEXT
[Comprehensive background]

---

## ADDRESSING APOLOGETIC RESPONSES
[At least 3 defenses addressed]

---

## THE LOGICAL STRUCTURE
[How the argument works]

---

## PRODUCER NOTES
[Production guidance]

---

## SUNO MATERIALS
[Caption, style, image prompts]

---

## CROSS-REFERENCES
[Related findings and songs]

---

## VERSION HISTORY
[Track changes]

---

## COMPLETION CHECKLIST
[Verification that all elements present]
```

---

## Quality Standards

A completed song must have:

1. **100% source tracing** — Every lyric accounted for
2. **Verified accuracy** — Quotes checked against originals
3. **Fair context** — No misrepresentation
4. **Strong apologetic responses** — Best defenses addressed
5. **Production-ready materials** — Can go directly to Suno
6. **Complete documentation** — Future users can understand everything

---

## Handoff

After completing a song:

1. **Commit to `songs/completed/`**
2. **Update all cross-references**
3. **Notify for production** (Suno generation)
4. **Log any follow-up songs** suggested by this material

The song is now ready for:
- Suno generation
- Addition to the catalog
- Publication with companion materials

---

## Example Output

See `songs/completed/who-are-the-real-fanatics.md` for the gold standard of a completed song file.

---

*"The remedy can never be applied, unless the disease is known."*
