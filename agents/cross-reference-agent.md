# CROSS-REFERENCE AGENT
## Maintaining Connections Across the Corpus

---

## Purpose

Build and maintain the web of connections that makes this project powerful:
- Link findings to topics
- Link findings to speakers
- Link findings to each other
- Identify patterns across sermons
- Suggest song combinations

---

## Input Requirements

To run this agent, you need:
1. **Completed sermon analyses** from `volumes/*/findings/`
2. **Existing topic files** from `topics/`
3. **Existing speaker files** from `speakers/`
4. **Current `index.md`** state

---

## Output Specifications

This agent updates:
1. **Topic files** in `topics/`
2. **Speaker files** in `speakers/`
3. **`index.md`** cross-reference sections
4. **Pattern documentation** in findings

---

## Why Cross-Referencing Matters

### 1. Multiple Witnesses Strengthen the Case
A single quote can be dismissed. Multiple quotes from multiple sermons on the same topic establish a pattern.

### 2. Self-Contradiction Across Time
Some of the best material comes from speakers contradicting themselves across different sermons.

### 3. Institutional Patterns
Seeing the same teaching from multiple leaders shows it was institutional, not individual.

### 4. Song Material Combinations
Some topics need multiple sources to make a strong song. Cross-referencing identifies these opportunities.

---

## Workflow

### Step 1: After Any New Analysis

When a new sermon analysis is completed:

**A. Update Topic Files**

For each topic touched by the finding:

1. Open `topics/[topic].md`
2. Add the new finding to the appropriate section
3. Note relationships to existing findings
4. Update song status if applicable

Example entry:
```markdown
#### Finding: [Brief Description]
**Source:** JoD X:page (Date)
**Speaker:** [Name]

> "Key quote"

**Connection to other findings:**
- Confirms [other finding] from JoD Y:page
- Contradicts [other finding] from JoD Z:page
- Same language as [other finding]

**Song Status:** 🔲 Candidate / ✅ Completed / 📎 Supporting Material
```

**B. Update Speaker Files**

For each speaker in the finding:

1. Open `speakers/[speaker].md`
2. Add to chronological findings list
3. Note any self-contradiction with earlier findings
4. Update pattern observations

**C. Update Index.md**

1. Add to topic counts
2. Add to speaker counts
3. Note any high-value cross-references discovered

### Step 2: Periodic Review

Run this periodically (after every 5-10 analyses):

**A. Pattern Scan**

Review all findings in each topic file and look for:

1. **Consistency patterns** — Same teaching repeated (strengthens case)
2. **Contradiction patterns** — Teaching changed over time (shows unreliability)
3. **Escalation patterns** — Teaching got more extreme (reveals trajectory)
4. **Hedging patterns** — Did certainty vary? (affects apologetic responses)

**B. Speaker Scan**

Review all findings in each speaker file and look for:

1. **Internal contradictions** — Speaker contradicting themselves
2. **Authority escalation** — Claims getting stronger
3. **Characteristic phrases** — Recurring language
4. **Vulnerable moments** — Self-set standards they fail

**C. Song Opportunity Scan**

Look for combinations that would make strong songs:

1. **Setup + Payoff across sermons** — One sermon claims, another fails
2. **Definition + Violation** — One sermon defines standard, another violates it
3. **Promise + Failure** — Prophecy from one sermon, failure documented elsewhere
4. **Institutional pattern** — Multiple leaders teaching the same error

### Step 3: Document Connections

When significant connections are found:

**Create a connection note** in relevant files:

```markdown
### Cross-Reference: [Connection Title]

**Sermons Involved:**
- JoD X:page ([Speaker], [Date]) — [Role in connection]
- JoD Y:page ([Speaker], [Date]) — [Role in connection]

**The Connection:**
[Explain what connects these findings]

**Song Potential:**
[Does this combination suggest a song?]

**Next Steps:**
[What should be done with this connection?]
```

---

## Connection Types

### Type 1: Confirmation
Multiple sources say the same thing. This strengthens the case.

Example: Brigham Young teaching sun inhabitants in JoD 13:271 AND JoD 1:219

**Use:** Establishes pattern, defeats "isolated comment" defense

### Type 2: Contradiction
Speaker or institution contradicts itself over time.

Example: "Church will never abandon polygamy" (JoD 25:309) vs. 1890 Manifesto

**Use:** Shows unreliability, excellent song material

### Type 3: Escalation
Teaching gets more extreme over time.

Example: Racial teachings becoming more severe from 1850s-1860s

**Use:** Shows trajectory, defeats "product of time" defense (it got worse, not better)

### Type 4: Definition-Violation
Speaker defines a standard then violates it.

Example: Brigham defining "fanatics" then exemplifying the definition

**Use:** Perfect self-refuting structure, best song material

### Type 5: Authority-Error
Strong authority claim paired with demonstrable error.

Example: "Sermons are Scripture" (JoD 13:95) + falsifiable claims (JoD 13:271)

**Use:** Undermines authority structure

### Type 6: Prophecy-Failure
Specific prediction paired with documented non-occurrence.

Example: JFS space prophecy (1961) + Apollo 11 (1969)

**Use:** Clean falsification

### Type 7: Institutional Pattern
Same teaching from multiple leaders.

Example: Blood atonement from Brigham Young, Jedediah Grant, etc.

**Use:** Defeats "just one man's opinion" defense

---

## Topic File Maintenance

### Required Sections in Each Topic File

```markdown
# TOPIC: [Name]
## [Subtitle]

---

## Overview
[What this topic covers, why it matters]

---

## Key Findings

### [Finding Category 1]
[Findings organized by sub-topic or chronology]

### [Finding Category 2]
[...]

---

## Cross-Reference Connections
[Documented connections to other topics, speakers, or findings]

---

## Apologetic Responses
[Common defenses specific to this topic]

---

## Song Potential Summary
[Table of findings with song status]

---

## Research Gaps
[What still needs to be found/verified]

---

## Notes
[Observations, patterns, ideas]
```

### Keeping Topic Files Current

After each analysis session:
- [ ] All new findings added to relevant topic files
- [ ] Cross-references noted
- [ ] Song status updated
- [ ] Pattern observations added to Notes section

---

## Speaker File Maintenance

### Required Sections in Each Speaker File

```markdown
# SPEAKER: [Name]
## [Title/Position]

---

## Overview
[Who they were, positions held, time period active]

---

## Findings by Topic

### [Topic 1]
[Findings from this speaker on this topic]

### [Topic 2]
[...]

---

## Chronological Findings
[All findings in date order—useful for tracking changes over time]

---

## Self-Contradictions
[Documented instances of contradicting themselves]

---

## Characteristic Phrases
[Recurring language that identifies their style]

---

## Song Status
[Table of findings with song status]

---

## Notes
[Observations about this speaker's patterns]
```

---

## Index.md Maintenance

### After Each Session Update:

1. **Volume status** — Mark progress
2. **Finding counts** — Update topic and speaker tallies
3. **Song pipeline** — Update candidate/completed counts
4. **Priority queue** — Adjust based on new discoveries
5. **Session log** — Document what was done

---

## Quality Checklist

After running Cross-Reference Agent:

- [ ] All new findings added to topic files
- [ ] All new findings added to speaker files
- [ ] Cross-references documented where found
- [ ] Pattern observations noted
- [ ] Song opportunities flagged
- [ ] Index.md updated
- [ ] No orphaned findings (everything linked somewhere)

---

## Tips for Effective Cross-Referencing

### 1. Read Broadly, Not Just Deeply
Skim many findings regularly. Connections often emerge from familiarity with the breadth of material.

### 2. Track Characteristic Phrases
When you see a phrase like "No question of it," note it. If it appears elsewhere, you have a pattern.

### 3. Build Timeline Awareness
Know the key dates:
- 1852: Adam-God in General Conference
- 1890: Polygamy Manifesto
- 1978: Priesthood revelation
- etc.

This helps spot prophecy/failure connections.

### 4. Look for Irony Structures
The best cross-references are ones where:
- Sermon A sets a standard
- Sermon B violates it
- Or: Speaker A promises something
- History shows it failed

### 5. Don't Force Connections
A weak connection undermines credibility. Only document connections that genuinely strengthen the case.

---

*"The remedy can never be applied, unless the disease is known."*
