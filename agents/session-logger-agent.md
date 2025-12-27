# SESSION LOGGER AGENT
## Documenting Progress and Maintaining History

---

## Purpose

Maintain comprehensive session logs that:
- Document all agent actions and outputs
- Track progress across volumes, sermons, and songs
- Record decisions made and rationale
- Update `index.md` with session summaries
- Enable seamless session handoffs

---

## Input Requirements

To run this agent, you need:
1. **Action to log** (agent completed, decision made, finding discovered)
2. **Current session date** for file naming
3. **Context** from the Producer Agent

---

## Output Specifications

This agent produces:
1. **Session log file**: `logs/sessions/YYYY-MM-DD-session.md`
2. **Updates to `index.md`** session log section
3. **Carry-forward items** for next session

---

## Log File Structure

Each session creates or appends to `logs/sessions/YYYY-MM-DD-session.md`:

```markdown
# Session Log: YYYY-MM-DD

## Session Overview

| Field | Value |
|-------|-------|
| Date | YYYY-MM-DD |
| Start Time | HH:MM |
| End Time | HH:MM |
| Duration | X hours Y minutes |
| Focus | [Volume X / Topic / Continuation] |
| Volumes Touched | [List] |
| Sermons Surveyed | [Count] |
| Sermons Analyzed | [Count] |
| Findings Logged | [Count] |
| Songs Advanced | [Count] |

---

## Timeline

### HH:MM - Session Start
**Focus:** [What was requested]
**Starting State:** [Summary from index.md]

---

### HH:MM - [Action Type]
**Agent:** [Research / Analysis / Song Dev / Song Final / Cross-Ref]
**Input:** [What the agent received]
**Output:** [What the agent produced]
**Flagged:** [If applicable - items flagged for follow-up]
**Notes:** [Observations, issues, or context]

---

[Repeat for each logged action]

---

## Findings Summary

| Finding | Source | Category | Song Potential |
|---------|--------|----------|----------------|
| [Brief description] | JoD X:pp | [Category] | [★ rating] |

---

## Decisions Made

### Decision: [Brief title]
**Context:** [Why this decision was needed]
**Options:** [What was considered]
**Chosen:** [What was decided]
**Rationale:** [Why]

---

## Session Summary

[Narrative summary of what was accomplished, patterns noticed, and recommendations]

---

## Carry Forward

### Must Complete Next Session
- [ ] [Incomplete item 1]
- [ ] [Incomplete item 2]

### Should Address Soon
- [ ] [Medium priority item]

### Ideas for Future
- [ ] [Lower priority / exploratory item]

---

## Index Updates Made

[List of updates pushed to index.md during this session]
```

---

## Workflow

### Step 1: Initialize Session Log

At session start:
1. Check if `logs/sessions/YYYY-MM-DD-session.md` exists
2. If not, create with header and Session Overview table
3. If yes, append a new session block (for multiple sessions same day)
4. Log "Session Start" with focus and starting state

### Step 2: Log Agent Completions

After each agent completes, add a timeline entry:

```markdown
### HH:MM - Research Agent Complete
**Agent:** Research Agent
**Input:** Volume 1, Sermons 1-15 (Batch 1)
**Output:** 4 sermons flagged (2 HIGH, 2 MEDIUM)
**Flagged:**
- JoD 1:50-51 (Adam-God) - HIGH
- JoD 1:219 (Moon inhabitants) - HIGH
- JoD 1:103 (Polygamy defense) - MEDIUM
- JoD 1:156 (Authority claim) - MEDIUM
**Notes:** Batch completed efficiently. Known content at 1:50 confirmed.
```

### Step 3: Log Decisions

When a decision point is reached (even if auto-decided):

```markdown
### Decision: Which flagged sermons to analyze
**Context:** Research Agent flagged 4 sermons in Batch 1
**Options:**
1. Analyze all 4
2. Analyze HIGH priority only (2)
3. Analyze specific selection
**Chosen:** Option 2 - HIGH priority only
**Rationale:** Per autonomous mode defaults. MEDIUM priority logged for later.
```

### Step 4: Log Findings

When Analysis Agent produces findings:

```markdown
### HH:MM - Analysis Complete: Adam-God Sermon
**Agent:** Analysis Agent
**Input:** JoD 1:50-51 (April 9, 1852)
**Output:**
- 5 key quotes extracted
- Category: DISAVOWED
- Song Potential: ★★★★★
**Flagged:** Auto-trigger Song Development Agent
**Notes:** Core Adam-God doctrine clearly stated. "When our father Adam came into the garden of Eden, he came into it with a celestial body, and brought Eve, one of his wives, with him."
```

### Step 5: Update Findings Summary Table

Maintain running table of all findings from the session:

| Finding | Source | Category | Song Potential |
|---------|--------|----------|----------------|
| Adam-God doctrine | JoD 1:50 | DISAVOWED | ★★★★★ |
| Moon inhabitants | JoD 1:219 | FALSIFIED | ★★★★☆ |

### Step 6: Log Session End

At session conclusion:

1. Fill in End Time and Duration
2. Complete Session Summary narrative
3. Populate Carry Forward section
4. List Index Updates Made

### Step 7: Update index.md

Push key information to `index.md`:

1. Add entry to Session Log section
2. Update volume status if changed
3. Update finding counts
4. Update song pipeline status
5. Add any new high-priority targets discovered

---

## What to Log

### Always Log
- Session start/end
- Every agent completion with inputs/outputs
- All flagged items (sermons, findings, song candidates)
- Decisions made (automatic or user-directed)
- Errors or blockers encountered

### Log with Detail
- HIGH priority findings (full quote excerpts)
- ★★★★★ song candidates (hook identified)
- Cross-references discovered
- Self-contradictions found

### Log Briefly
- MEDIUM/LOW priority items (one line each)
- Routine cross-reference updates
- Expected outcomes (no surprises)

### Don't Log
- Internal agent processing steps
- Failed searches that found nothing
- Duplicate information already in findings files

---

## Integration with Producer Agent

The Producer Agent calls Session Logger at these points:

| Trigger | Log Entry Type |
|---------|----------------|
| Session initialization | Session Start |
| Research Agent complete | Agent Completion |
| Each Analysis Agent complete | Agent Completion + Finding |
| Song Dev Agent complete | Agent Completion |
| Cross-Reference Agent complete | Agent Completion |
| Decision point reached | Decision |
| Error or blocker | Error Entry |
| Batch complete | Batch Summary |
| Session end | Session End + Summary |

---

## index.md Integration

### Session Log Entry Format

Add to `index.md` Session Log section:

```markdown
### YYYY-MM-DD — [Focus Summary]
- **Volumes:** [List]
- **Surveyed:** [X] sermons
- **Analyzed:** [X] sermons
- **Findings:** [X] logged
- **Songs:** [X] advanced
- **Highlights:** [1-2 sentence summary of key discoveries]
- **Next:** [Brief note on carry-forward]
```

### Batch Progress Update

Update volume status table with batch progress:

```markdown
| Vol | Status | Sermons | Batch Progress | Notes |
|-----|--------|---------|----------------|-------|
| 1 | 🟡 Partial | ~54 | 2/4 batches | Adam-God analyzed |
```

---

## Error Logging

When issues occur:

```markdown
### HH:MM - ERROR
**Type:** [Source Access / Ambiguity / Conflict / Technical]
**Description:** [What happened]
**Impact:** [What was blocked]
**Resolution:** [How it was resolved, or "Escalated to user"]
```

---

## Quality Checklist

Before closing a session log:

- [ ] Session Overview table complete
- [ ] All agent completions logged
- [ ] All decisions documented
- [ ] Findings Summary table populated
- [ ] Session Summary written
- [ ] Carry Forward items listed
- [ ] index.md updates noted
- [ ] index.md actually updated

---

## Example Session Log

See first session log created during production for reference pattern.

---

*"The remedy can never be applied, unless the disease is known."*
