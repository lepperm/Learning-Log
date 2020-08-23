--- 
layout: progression
name: Git
fullname: Git
mainsite: https://git-scm.com/
category: Version Control
progressionEntries: 
  - 
    id: 1
    status: IP
    name: Learn Git Branching (6/34)
    item: https://learngitbranching.js.org/
    type: Tutorial
    relproj:
    relprojlink:
    datecomp:
    datelink:
  - 
    id: 2
    status: UN
    name: Git Explained
    item: https://dev.to/milu_franz/series/6989
    type: Blog
    relproj: 
    relprojlink: 
    datecomp: 
    datelink: 
resources: 
  - 
    refname: Resources to learn Git
    reflink: https://try.github.io/
  - 
    refname: Atlassian Git tutorials
    reflink: https://www.atlassian.com/git/tutorials
---
## Quick Reference
### Branch

Creating branches:
```git
git branch newBranch
git checkout newBranch
```
Or, in a single command:
`git checkout -b newBranch`

`git merge newBranch` will merge `newBranch` into our current checked out branch.

### Rebase

Rebasing takes a set of commits, "copies" them, and places them somewhere else. This can be used to make a linear sequence of commits. The commit log / history of the repository will be a lot cleaner if only rebasing is allowed.

While bugFix is checked out, if we use `git rebase master`:

{% include mermaid-init.html %}
<div class="mermaid">
stateDiagram-v2
	[*] --> C0
	C0 --> C1

	C1 --> [*]%%old bugFix
	C1 --> master
	master --> bugFix:rebase
</div>

### HEAD and Relative References

`HEAD` is the symbolic name for the currently checked out commit.
By checking out the hash for a commit instead of the label, we can detach the `HEAD` from the label.

Referencing commits by their hash isn't always practical, so we can take advantage of relative commits 

`^` - Move upwards one commit at a time  
`~<num>` - Move upwards a specified number of times

So saying `git checkout master^` is equivalent to "checkout the first parent of master":

<div class="mermaid">
stateDiagram-v2
	[*] --> C0
	C0 --> C1
    note left of C1
      HEAD
    end note
	C1 --> master
</div>