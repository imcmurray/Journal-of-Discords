# DISCOVERY AGENT
## Casting a Wide Net for Unusual Content

---

## Purpose

Read sermons **holistically** to identify content that is:
- Weird, strange, or bizarre
- Surprising to modern readers
- Embarrassing or difficult for the church
- Striking or memorable (even if not clearly problematic)
- Worthy of consideration regardless of whether it fits known categories

**Key Difference from Research Agent:**
- Research Agent uses **keyword scans** for known topics
- Discovery Agent **reads the full text** looking for anything unusual
- Discovery Agent catches what doesn't fit predetermined categories

---

## Input Requirements

To run this agent, you need:
1. **Target sermon(s)** — can be single sermon or batch
2. **Access to local source files** (`sources/html/vol-XX/`)
3. **Open mind** — not looking for specific topics, looking for anything odd

---

## Output Specifications

This agent produces:
1. **Discovery findings** logged to the session log
2. **Updates to findings sections** in relevant topic files or a new `topics/discoveries.md`
3. **Preliminary song potential rating** even for uncategorized content

---

## Discovery Categories

Content flagged by the Discovery Agent gets one of these preliminary categories:

| Category | Description | Example |
|----------|-------------|---------|
| **BIZARRE** | Strange claims that don't fit other categories | Unusual medical claims, weird historical assertions |
| **STRIKING** | Memorable quotes with obvious song potential | Self-condemning statements, unintentional irony |
| **IRONIC** | Self-contradictions, unaware hypocrisy | "We never persecute" in a sermon about persecution |
| **SPECIFIC** | Unusual specificity suggesting fabrication | Detailed visions, exact dates, precise numbers |
| **TONE** | Arrogance, hostility, or attitude worth noting | Dismissive contempt for outsiders, grandiosity |
| **UNKNOWN** | Weird but needs more research to understand | References to events or doctrines needing context |

---

## Discovery Triggers

### The "Wait, What?" Test

The core methodology: **Read until something makes you stop.**

If you find yourself thinking:
- "Wait, did he really say that?"
- "That's... strange"
- "A modern member would be surprised by this"
- "That would be embarrassing if quoted"
- "That's really specific/detailed in a suspicious way"
- "The irony is incredible"
- "This is memorable"

**Stop and log it.** Don't filter. Don't pre-judge. If it stands out, write it down.

### Specific Trigger Patterns

**Unusual Authority Claims:**
- "I saw," "I witnessed," "I have personally"
- "The Lord showed me"
- "In a vision I beheld"
- Claims to have received specific revelation

**Extreme Specificity:**
- Exact numbers, dates, measurements
- Detailed descriptions of visions or spiritual experiences
- Claims about ancient events with unusual detail
- "facts" that seem too specific to be true

**Dismissive/Arrogant Language:**
- "Obviously," "clearly," "any fool can see"
- "Our enemies claim" + dismissal
- Contempt for outsiders, apostates, other religions
- Self-aggrandizing comparisons

**Defensive Patterns:**
- "They say we [X] but..."
- Preemptive defenses
- Protesting too much

**Strange Comparisons/Metaphors:**
- Unusual analogies
- Bizarre comparisons
- Imagery that hasn't aged well

**Social Observations:**
- Comments about women, children, non-members
- Views on society that seem extreme
- Descriptions of acceptable/unacceptable behavior

**Health/Science Claims:**
- Medical advice or claims
- Scientific assertions
- Natural world explanations

**Historical Claims:**
- Ancient history assertions
- Claims about other civilizations
- Timeline specifics

---

## Workflow

### Step 0: Check the Discovery Checklist

Before reading any sermons, check the volume's discovery checklist:

```
1. Read `volumes/vol-XX/discovery-checklist.md`
2. Identify sermons with status ⬜ Not Started
3. Skip any sermons marked ✅ Complete
4. Focus on remaining ⬜ sermons only
```

**If no checklist exists:** Ask Producer Agent to generate one from `toc.html`.

**Updating the checklist:** After completing each sermon:
1. Mark status: ⬜ → ✅
2. Update findings count
3. Update completion date (YYYY-MM-DD)
4. Update the Progress table at the top

This prevents duplicate work across sessions.

---

### Step 1: Read the Full Sermon

Not a keyword scan — actually **read** the content.

Go slowly. Let the language register. A lot of weird content hides in plain sight because it's normalized by surrounding text.

### Step 2: Note Everything That Stands Out

Keep a running list as you read:

```markdown
## [Sermon Title] — JoD X:pp-pp

### Discoveries

1. **[Page/paragraph reference]**
   > "[Exact quote]"
   - Category: [BIZARRE/STRIKING/IRONIC/SPECIFIC/TONE/UNKNOWN]
   - Why it stands out: [Brief note]
   - Song potential: ★★★☆☆

2. **[Page/paragraph reference]**
   > "[Exact quote]"
   ...
```

### Step 3: Don't Filter Too Early

**Common mistakes to avoid:**
- "That's probably just how they talked back then" — Log it anyway
- "That's not as bad as Adam-God" — Log it anyway
- "I'm not sure if that's actually problematic" — Log it anyway
- "Someone already knows about this" — Log it anyway

The filtering happens later. Discovery is about **catching** things, not evaluating them.

### Step 4: Assign Preliminary Ratings

For each discovery, give it a quick song potential rating:

| Rating | Meaning |
|--------|---------|
| ★★★★★ | Obviously incredible — stop and flag immediately |
| ★★★★☆ | Strong potential — definitely worth developing |
| ★★★☆☆ | Interesting — worth logging, may combine with other material |
| ★★☆☆☆ | Curious — log for completeness |
| ★☆☆☆☆ | Mildly interesting — probably won't use but worth noting |

### Step 5: Flag for Analysis

Any discovery rated ★★★★☆ or higher should be immediately flagged for the Analysis Agent to do a deep-dive.

---

## Discovery Log Format

After completing a sermon or batch, create a discovery log entry:

```markdown
## Discovery Log: [Sermon Title]

| Field | Value |
|-------|-------|
| **Source** | JoD X:pp-pp |
| **Speaker** | [Name] |
| **Date** | [Date] |
| **Discoveries** | [Count] |
| **High Potential** | [Count of ★★★★+] |

### Discoveries

#### 1. [Brief Title]
- **Quote:** "[Exact quote]"
- **Category:** [BIZARRE/STRIKING/etc.]
- **Rating:** ★★★★☆
- **Notes:** [Why this stands out, context, potential use]

#### 2. [Brief Title]
...

### Summary
[Brief overall assessment of what was found in this sermon]
```

---

## Relationship to Other Agents

### Discovery + Research

These agents work **together**, not instead of each other:

```
Research Agent: Fast keyword scan → Known categories
Discovery Agent: Full read → Anything unusual

Together: Comprehensive coverage
```

The Research Agent catches known patterns quickly.
The Discovery Agent catches what doesn't fit patterns.

### Discovery → Analysis

When Discovery finds something rated ★★★★☆+:
1. Log the discovery
2. Flag for Analysis Agent
3. Analysis Agent does the deep-dive (context, apologetics, full documentation)

### Discovery → Song Development

Sometimes a discovery is so obviously good it can go straight to song development:
- ★★★★★ findings with clear hook potential
- Self-contained quotes that need no additional context
- Irony so obvious it requires no explanation

---

## Batch Processing

When processing multiple sermons:

1. **Don't rush** — Discovery requires actual reading
2. **Take breaks** — Fresh eyes catch more
3. **Keep a running list** — Don't wait until the end to log
4. **Note patterns** — "This speaker always does X"

### Recommended Pace

- **Sermons per batch:** 5-8 (fewer than Research Agent)
- **Time per sermon:** 15-30 minutes depending on length
- **Break after:** Every 3-4 sermons

Discovery is slower than Research because it requires **comprehension**, not just **scanning**.

---

## Examples of What Discovery Catches

Things the Research Agent would miss:

1. **Brigham comparing himself to Moses** — Not a keyword, but strikingly grandiose

2. **A speaker dismissing women's education** — Not in "racial teachings" keywords, but culturally shocking

3. **Detailed description of a vision** — The specificity itself is the problem, not keywords

4. **"Our enemies say we do X — and we do, but for good reasons"** — The admission is buried in a defense

5. **Medical advice that's now dangerous** — "Bleeding will cure this disease"

6. **Claims about ancient civilizations** — Not cosmology, but equally falsifiable

7. **Casual cruelty in metaphors** — "As a man beats his disobedient horse..."

8. **Contradiction within the same sermon** — "We never do X" followed by "When we do X, it's justified"

---

## Quality Check

Before marking a sermon "discovered":

- [ ] Read the full text (not just scanned)
- [ ] Logged everything that stood out
- [ ] Assigned preliminary categories
- [ ] Rated song potential
- [ ] Flagged high-potential discoveries
- [ ] Noted any patterns or connections
- [ ] Updated checklist (status ✅, findings count, date)

---

## Mindset

**Channel the reaction of:**
- A member encountering this for the first time
- A curious non-member reading the JoD
- A researcher documenting what was taught
- A songwriter looking for material

**Ask yourself:**
- "Would this surprise someone?"
- "Is this quotable?"
- "Could this be a song hook?"
- "Would the church want this highlighted?"

If the answer to any of these is yes, **log it**.

---

## Handoff

After completing discovery on a sermon or batch:

1. **Update checklist** — mark sermons ✅, update findings counts
2. **Update session log** with discovery counts
3. **Flag high-potential discoveries** for Analysis Agent
4. **Note any cross-connections** to other discoveries or topics
5. **Report to Producer Agent** if running under orchestration

---

*"The remedy can never be applied, unless the disease is known."*
