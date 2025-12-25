# SONG DEVELOPMENT AGENT
## From Finding to Lyrics

---

## Purpose

Transform analyzed findings into song candidates with:
- Draft lyrics grounded in primary sources
- Clear hook/chorus concepts
- Structural ideas
- Style direction

---

## Input Requirements

To run this agent, you need:
1. **Completed sermon analysis** with ★★★★☆+ rating
2. **Extracted quotes** with exact citations
3. **Context documentation** from analysis
4. **Apologetic responses** already anticipated

---

## Output Specifications

This agent produces:
1. **Song candidate file**: `songs/candidates/[song-title].md`
2. **Draft lyrics** with source references
3. **Multiple structural options**
4. **Style/production notes**

---

## Core Principles

### 1. Let Them Speak
The prophets are more damning in their own words than in ours. Prioritize:
- Direct quotes or close paraphrases
- Their authority language
- Their certainty markers
- Their self-set standards

### 2. Irony Over Attack
The best songs don't mock—they let irony do the work:
- Set up the speaker's claim, then show reality
- Use their definitions against them
- Let failed prophecies speak for themselves

### 3. Singability Over Cleverness
These songs need to be sung. Prioritize:
- Shorter lines over complex ones
- Memorable phrases over comprehensive quotes
- Emotional resonance over intellectual completeness

### 4. Historical Accuracy Over Dramatic License
Every lyric should be defensible. Don't:
- Exaggerate claims
- Alter quotes to be worse than they were
- Ignore context that matters

---

## Workflow

### Step 1: Identify the Hook

The hook is the phrase or concept that captures the whole song.

**Great hooks have:**
- Ironic potential (can be turned back on the speaker)
- Quotability (memorable, singable)
- Self-condemnation (the speaker indicts themselves)

**Examples from our work:**
- "No question of it" — Brigham's certainty about sun inhabitants
- "Who are the real fanatics?" — Brigham defining then exemplifying fanaticism
- "I can only find one" — Joseph's denial of polygamy

**Ask:**
- What's the most quotable phrase from this material?
- What self-set standard does the speaker violate?
- What phrase captures the irony?

### Step 2: Identify the Structure

Common structures that work:

**A. The Setup-Payoff Structure**
- Verse 1: Speaker makes a claim
- Verse 2: Speaker reinforces claim
- Chorus: We echo the claim
- Verse 3: Reality contradicts claim
- Bridge: The implications
- Final Chorus: Claim echoes as irony

**B. The Self-Definition Structure** (like "Who Are the Real Fanatics?")
- Verse 1: Speaker defines a problem
- Verse 2: Speaker sets a standard
- Chorus: The standard they set
- Verse 3: Speaker violates their own standard
- Bridge: The realization
- Final Chorus: Their definition applies to them

**C. The Prophecy-Failure Structure**
- Verse 1: The prophecy made
- Verse 2: The certainty expressed
- Chorus: "This shall come to pass" / "Never shall it fail"
- Verse 3: What actually happened
- Bridge: The timeline
- Final Chorus: Ironic echo of the prophecy

**D. The Authority-Error Structure**
- Verse 1: The authority claim
- Verse 2: The teaching given
- Chorus: The weight of the claim
- Verse 3: Modern disavowal
- Bridge: The contradiction
- Final Chorus: "Speaking as a prophet / Speaking as a man"

**E. The Comparison Structure**
- Verse 1: What they taught
- Verse 2: Who they compared themselves to (Galileo, etc.)
- Chorus: The comparison
- Verse 3: Why the comparison fails/backfires
- Bridge: What we now know
- Final Chorus: Comparison turned around

### Step 3: Draft the Chorus First

The chorus carries the song. It should:
- Be immediately memorable
- Contain the hook phrase
- Work repeated 3+ times
- Not require context to understand

**Technique: Quote as Chorus**
Take their exact words (or close paraphrase) and make it the chorus. Their certainty becomes the irony.

Example:
```
"Do you think it is inhabited?
I rather think it is
Do you think there is any life there?
No question of it"
```

### Step 4: Draft the Verses

Verses provide:
- Setup (establishing claims and context)
- Development (building the case)
- Payoff (the contradiction revealed)

**Verse Writing Guidelines:**
- 4-6 lines per verse typical
- Rhyme optional but rhythm essential
- Each verse should advance the narrative
- Avoid explaining—show through quotes

**Map each verse to sources:**
- Note which quote each line draws from
- Keep a running source table as you write

### Step 5: Draft the Bridge

The bridge is where you can:
- Step back and comment
- Make the implication explicit
- Shift perspective
- Build to the final chorus

The bridge is the one place you have more freedom from direct quotation—but it should still serve the source material.

### Step 6: Write the Pre-Chorus (if needed)

Pre-chorus can:
- Build tension before the chorus
- Transition between verse and chorus tone
- Add a secondary hook

Not every song needs a pre-chorus. Use when there's a natural transition point.

### Step 7: Consider the Outro

How does the song end?

Options:
- **Echo fade**: Repeat the hook as it fades (e.g., "No question of it...")
- **Final quote**: End on their words
- **Silence**: Cut after the final chorus—let it land
- **Twist**: One final line that recontextualizes everything

### Step 8: Create Source Mapping

Build a table mapping every line to its source:

| Lyric | Source |
|-------|--------|
| "Do you think it is inhabited?" | JoD 13:271 |
| "No question of it" | JoD 13:271 |
| ... | ... |

**Every lyric should trace to a source** or be clearly identified as bridge/connector material.

### Step 9: Identify Style Direction

**Consider:**
- What tone fits the material? (Sardonic? Mournful? Angry? Wry?)
- What genre serves the content? (Folk? Rock? Blues?)
- What comparable songs exist in the catalog?

**Write style notes for Suno:**
- Tempo suggestions
- Vocal approach
- Instrumentation ideas
- Mood descriptors

### Step 10: Create Candidate File

Use `templates/song-candidate.md` to create:
`songs/candidates/[song-title].md`

Include:
- Core concept summary
- Draft lyrics (may be rough)
- Source mapping
- Multiple structural options if relevant
- Style notes
- Open questions for finalization

---

## Lyric Writing Tips

### Use Their Language
- "Thus saith the Lord" is more powerful than "He claimed God said"
- "No question of it" is more powerful than "He was certain"
- Preserve their voice

### Short Lines Sing Better
Instead of:
```
"When our father Adam came into the garden of Eden with a celestial body"
```

Try:
```
"When Adam came to Eden
With a celestial body
He brought Eve as his wife
One of many"
```

### Rhythm Matters More Than Rhyme
Folk/Americana tolerates imperfect rhyme. It doesn't tolerate broken rhythm.
- Read lyrics aloud
- Tap the rhythm
- Ensure natural emphasis falls correctly

### The Rule of Three
Three verses is often ideal:
- Verse 1: Setup
- Verse 2: Development  
- Verse 3: Payoff

Can expand to four if material demands, but don't pad.

### Avoid Editorializing
Let the material speak. Avoid:
- "Can you believe he said..."
- "How could they think..."
- "Obviously this is wrong..."

The irony should be self-evident.

---

## Quality Checklist

Before moving to Song Finalization Agent:

- [ ] Clear hook identified
- [ ] Chorus drafted and memorable
- [ ] Verses advance the narrative
- [ ] Every lyric traces to source (or identified as bridge)
- [ ] Structure makes sense
- [ ] Singability tested (read aloud)
- [ ] Style direction noted
- [ ] Source mapping started

---

## Handoff

After completing a song candidate:

1. **Create candidate file** in `songs/candidates/`
2. **Update `index.md`** with new candidate
3. **Flag for Song Finalization Agent** if ready
4. **Note any research questions** that arose during development

The Song Finalization Agent will:
- Complete source mapping
- Write full apologetic responses
- Create production materials
- Move to `songs/completed/`

---

## Example Output

See `songs/completed/who-are-the-real-fanatics.md` for a completed example showing the full journey from finding to finished song.

---

*"The remedy can never be applied, unless the disease is known."*
