# ANALYSIS AGENT
## Deep Sermon Analysis and Quote Extraction

---

## Purpose

Conduct thorough analysis of flagged sermons to:
- Extract exact quotes with precise citations
- Understand full context
- Categorize the type of problem
- Assess song potential
- Anticipate apologetic responses

---

## Input Requirements

To run this agent, you need:
1. **A flagged sermon** from Research Agent output
2. **Full sermon text** from JoD source
3. **Relevant topic files** for cross-reference
4. **The sermon analysis template** (`templates/sermon-analysis.md`)

---

## Output Specifications

This agent produces:
1. **Sermon analysis file**: `volumes/vol-XX/findings/YYYY-MM-DD-sermon-title.md`
2. **Updates to topic files** in `topics/`
3. **Updates to speaker files** in `speakers/`
4. **Song potential rating and notes**

---

## Workflow

### Step 1: Read the Full Sermon

Do NOT rely on excerpts. Read the entire sermon at least once to understand:
- The overall purpose/thesis
- The rhetorical structure
- The audience and occasion
- The speaker's state of mind
- Any qualifications or hedging

### Step 2: Second Read - Extraction Mode

Read again with extraction focus:

**Mark these types of statements:**

1. **Definitive Claims**
   - "It is a fact that..."
   - "I know that..."
   - "No question of it"
   
2. **Authority Assertions**
   - "Thus saith the Lord"
   - "The Lord has revealed to me"
   - "This is doctrine"
   
3. **Prophetic Predictions**
   - "This shall come to pass"
   - "I prophesy that..."
   - Time-bound predictions
   
4. **Self-Referential Statements**
   - "I have never..."
   - "We have always..."
   - Claims about personal infallibility
   
5. **Doctrinal Teachings**
   - Statements about God's nature
   - Statements about salvation requirements
   - Statements about the afterlife
   
6. **Morally Problematic Statements**
   - Violence endorsement
   - Racial hierarchy claims
   - Coercion justification

### Step 3: Extract Quotes

For each significant quote:

```markdown
### Quote [N]: [Brief Description]

> "Exact quote with original spelling and punctuation. Copy precisely."
> — [Speaker], JoD [Volume]:[Page] ([Date])

**Context:** [What was happening around this quote]

**Significance:** [Why this matters]

**Category:** [FALSIFIED / DISAVOWED / SELF-CONTRA / FAILED-PROPH / CONTRA-MODERN / MORAL-PROBLEM]

**Cross-References:** [Related quotes in other sermons]
```

### Step 4: Contextual Analysis

Answer these questions:

**Setting Context:**
- What was the occasion? (General Conference, local meeting, special event)
- Who was the audience? (General membership, priesthood, investigators)
- What was the speaker's role at the time?

**Rhetorical Context:**
- What was the sermon's main argument?
- Was this a central point or tangential?
- What authority markers did the speaker use?

**Historical Context:**
- What was happening in the church/world at this time?
- Does this relate to contemporary controversies?
- Is this consistent with other teachings of the period?

**Interpretive Context:**
- Is there a charitable reading that makes this okay?
- If yes, why doesn't that reading hold?
- If no, note that there is no charitable reading

### Step 5: Categorize the Finding

**Primary Category** (choose one):
- **FALSIFIED**: Scientifically disproven (e.g., sun inhabitants)
- **DISAVOWED**: Church has formally or informally abandoned (e.g., Adam-God)
- **SELF-CONTRA**: Contradicts itself or the speaker's other claims
- **FAILED-PROPH**: Time-bound prediction that failed
- **CONTRA-MODERN**: Contradicts current church teaching
- **MORAL-PROBLEM**: Morally problematic by modern standards

**Secondary Categories** (if applicable):
- May have multiple categories
- Note which is primary

**Topic Tags:**
- Cosmology
- Adam-God
- Blood Atonement
- Racial Teachings
- Polygamy
- Authority Claims
- Failed Prophecies
- Other: [specify]

### Step 6: Self-Contradiction Analysis

This is where the best song material often hides.

**Check for:**

1. **Internal Contradiction**
   - Does the sermon contradict itself?
   - Does the speaker set up a standard then violate it?
   - Example: Brigham defining "fanatics" then exemplifying it

2. **Cross-Sermon Contradiction**
   - Does this contradict the same speaker elsewhere?
   - Does this contradict other prophets?

3. **Doctrine-Practice Contradiction**
   - Does the teaching contradict the speaker's actions?
   - Does the authority claim match the reliability?

4. **Irony Potential**
   - What phrases could be turned back on the speaker?
   - What standards does the speaker set that they fail?

### Step 7: Anticipate Apologetics

For each major finding, write:

```markdown
### Apologetic Defense #[N]: "[Likely claim]"

**The Defense:**
[What apologists will likely say]

**Why It Fails:**
[Why the source material defeats this defense]

**Source-Based Rebuttal:**
[Specific quotes that counter the defense]
```

Common defenses to address:
1. "Speaking as a man, not a prophet"
2. "Personal speculation, not doctrine"
3. "Product of his time"
4. "Taken out of context"
5. "Transcription error"
6. "Later prophets clarified"
7. "We don't believe in infallibility"

### Step 8: Rate Song Potential

**Rating Scale:**

★★★★★ — Perfect material
- Self-condemning structure
- Quotable hook phrase
- Clear irony
- No reasonable defense

★★★★☆ — Strong material
- Good content but needs framing
- May need context to land
- Minor defensive escape routes

★★★☆☆ — Moderate material
- Usable but not standalone
- Better as supporting evidence
- Needs combination with other material

★★☆☆☆ — Weak material
- Archivable but not song-worthy
- Too ambiguous
- Defenses are plausible

★☆☆☆☆ — Not usable
- Doesn't meet standards
- Charitable reading exists
- Document for completeness only

**Provide justification:**
- What makes this strong/weak?
- What's the hook?
- What's the challenge?

### Step 9: Create Analysis File

Use `templates/sermon-analysis.md` to create:
`volumes/vol-XX/findings/YYYY-MM-DD-sermon-title.md`

**File naming convention:**
- Use sermon date: YYYY-MM-DD
- Use abbreviated title in lowercase with hyphens
- Example: `1852-04-09-adam-god-conference.md`

### Step 10: Update Cross-Reference Files

After completing analysis:

1. **Update relevant topic file(s)** in `topics/`
   - Add finding summary
   - Note cross-references
   - Update song status

2. **Update speaker file** in `speakers/`
   - Add to speaker's findings list
   - Note patterns

3. **Update `index.md`**
   - Mark sermon as analyzed
   - Update finding counts
   - Add to candidates if high potential

---

## Quality Checklist

Before marking analysis complete:

- [ ] Full sermon read (not just excerpts)
- [ ] All significant quotes extracted with exact citations
- [ ] Context documented (setting, audience, purpose)
- [ ] Categories assigned (primary and secondary)
- [ ] Self-contradiction check completed
- [ ] Apologetic responses anticipated (at least 3)
- [ ] Song potential rated with justification
- [ ] Analysis file created
- [ ] Topic file(s) updated
- [ ] Speaker file updated
- [ ] Index.md updated

---

## Example Analysis

See `volumes/vol-13/findings/1870-07-24-gospel-one-man-power.md` for a completed example.

---

## Handoff

After completing a sermon analysis:

1. **If song potential ≥ ★★★★☆**:
   - Create entry in `songs/candidates/`
   - Flag for Song Development Agent

2. **If song potential ★★★☆☆**:
   - Note in topic file as supporting material
   - May combine with other findings

3. **If song potential ≤ ★★☆☆☆**:
   - Archive in topic file
   - Document for completeness
   - Move on

---

*"The remedy can never be applied, unless the disease is known."*
