--- 
layout: progression
name: git
fullname: Git
mainsite: https://git-scm.com/
category: Version Control
proficient: false
progressionEntries: 
  - 
    id: 1
    status: OK
    name: Learn Git Branching (34/34)
    item: https://learngitbranching.js.org/
    type: Tutorial
    price:
    est-duration:
    est-benefit:
    act-benefit:
    relproj:
    relprojlink:
    datecomp: 8/24/2020
    datelink:
  - 
    id: 2
    status: UN
    name: Git Explained
    item: https://dev.to/milu_franz/series/6989
    type: Blog
    price:
    est-duration:
    est-benefit:
    act-benefit:
    relproj: 
    relprojlink: 
    datecomp: 
    datelink: 
  - 
    id: 3
    status: NS
    name: Using Version Control in VS Code
    item: https://code.visualstudio.com/Docs/editor/versioncontrol
    type: Official Docs
    price:
    est-duration:
    est-benefit:
    act-benefit:
    relproj: 
    relprojlink: 
    datecomp: 
    datelink: 
  - 
    id: 4
    status: NS
    name: How to Scrub Sensitive Information from Git
    item: https://seesparkbox.com/foundry/remove_file_from_git_history_with_git_filter-branch
    type: Blog
    price:
    est-duration:
    est-benefit:
    act-benefit:
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
  - 
    refname: An irreverent site of obscure Git errors and how to fix them
    reflink: https://ohshitgit.com/
---
## Quick Reference

* TOC
{:toc}

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

`git rebase c2 c3` can also be used to copy commits below a certain target if specified as a second argument:

<div class="mermaid">
stateDiagram-v2
	[*] --> C0
	C0 --> C1
  C1 --> C2
  C1 --> C3
  C2 --> C3':rebase
</div>

### HEAD and Relative References

`HEAD` is the symbolic name for the currently checked out commit.
By checking out the hash for a commit instead of the label, we can detach the `HEAD` from the label.

Referencing commits by their hash isn't always practical, so we can take advantage of relative commits 

`^` - Move upwards one commit at a time  
`^2` - Move upwards one commit at a time, but specifying alternate parents from the immediate parent
`~3` - Move upwards a specified number of times (3, in our example)

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

These navigation commands can be chained together to quickly navigate across the tree:

`git checkout HEAD~^2~2`

<div class="mermaid">
stateDiagram-v2
	[*] --> C0
	C0 --> C1
  C1 --> C2
  C2 --> C6

  C0 --> C3
  note left of C3: master (end)
  C3 --> C4
  C4 --> C5
  C5 --> C6

  C6 --> C7
  note left of C7: master (start)
</div>

The force command `-f` can be used for force branches to different locations.

`git branch -f master HEAD~3`:

<div class="mermaid">
stateDiagram-v2
	[*] --> C0
	C0 --> C1
  note left of C1 :master*
  C1 --> C2
  C2 --> C3
  C3 --> C4
  note left of C4: bugFix
</div>

## Reversing Changes

`git reset` will move a branch backwards as if the commit had never been made in the first place. This affects the local repository.

`git revert`, on the other hand, will reverse a commit but push them remotely. It does so with a new commit forward in-line that undoes all of the referenced commits changes.

## Moving Work Around

### Cherry-Pick

`git cherry-pick <Commit1> <Commit2> <...>`

`cherry-pick' is a very straightforward way of saying that you would like to copy a series of commits below your current location (HEAD).

`git cherry-pick c2 c4`:

<div class="mermaid">
stateDiagram-v2
	[*] --> C0
	C0 --> C1
    C1 --> C2
    C2 --> C3
    C3 --> C4
    note left of C4 :side
    C1 --> C5
    C5 --> C2'
    C2' --> C4'
   note left of C4' :master*
</div>

Cherry-pick will take a commit from anywhere in the tree as long as that commit isn't an ancestor of HEAD.

### Interactive Rebase

All interactive rebase means is using the `rebase` command with the `-i` option.

If you include this option, git will open up a UI to show you which commits are about to be copied below the target of the rebase. It also shows their commit hashes and messages, which is great for getting a bearing on what's what. You can do things like reorder, omit, squash, and more!

### Locally Stacked Commits

Using `cherry-pick` and `rebase` can be a great way to push the final results of a laborious bug tracking and fixing hunt, without including all of the debugging along the way.

### Juggling Commits

Let's say you have some changes (newImage) and another set of changes (caption) that are related, so they are stacked on top of each other in your repository (aka one after another).

The tricky thing is that sometimes you need to make a small modification to an earlier commit. In this case, design wants us to change the dimensions of newImage slightly, even though that commit is way back in our history.

We can overcome this difficulty by doing the following:

- We will re-order the commits so the one we want to change is on top with `git rebase -i`
- We will `git commit --amend` to make the slight modification
- Then we will re-order the commits back to how they were previously with `git rebase -i`
- Finally, we will move master to this updated part of the tree

<div class="mermaid">
stateDiagram-v2
	[*] --> C0
	C0 --> C1
  C1 --> C2
  C2 --> C3
  note left of C2 :newImage
  note right of C3 :`git rebase -i c1` switching c3 and c2

  C1 --> C3'
  C3' --> C2'
  C3' --> C2''
  note left of C2'' :`git commit --amend`

  C1 --> C2'''
  note left of C2''' :`git rebase -i c1` switching c2'' and c3'
  C2''' --> C3''
  note right of C3'' :master, caption*
</div>

This worked out fine, but has the potential to introduce rebase conflicts. Using cherry-pick can be a more concise form of manipulating location.

## Tags

Tags are a way of marking commits as something more permanent than a branch. They do not move as commits are added, and you cannot check out a tag and then complete work in the tag, and checking out a tag will create a detached HEAD. It serves as an anchor in the commit tree to designate a particular spot, such as a milestone or version release.

`git tag v1 C1`:

<div class="mermaid">
stateDiagram-v2
	[*] --> C0
	C0 --> C1
  C1 --> C2
  note left of C1 :"v1"
  note left of C2 :master*
</div>

In our example, we added the tag to C1 explicitly, but the tag will be added to HEAD if a destination is omitted.

### Describe

Because tags serve as such great "anchors" in the codebase, `git describe` can be used to describe where you are relative to the closest "anchor" (aka tag). Git describe can help you get your bearings after you've moved many commits backwards or forwards in history.

Git describe takes the form of:

`git describe <ref>`

Where `<ref>` is anything git can resolve into a commit. If you don't specify a ref, git uses your current location (HEAD).

The output of the command looks like:

`<tag>_<numCommits>_g<hash>`

Where `<tag>` is the closest ancestor tag in history, `<numCommits>` is how many commits away that tag is, and `<hash>` is the hash of the commit being described.

<div class="mermaid">
stateDiagram-v2
	[*] --> C0
	C0 --> C1
  note left of C0 :"v1"
  C1 --> C2
  note right of C2 :master

  C1 --> C3
  note left of C3 :"v2"
  C3 --> C4
  note left of C4 :side*
</div>

- `git describe master` => `v1_2_gC2`, 2 commits from v1, hash C2
- `git describe side` => `v2_1_gC4`, 1 commits from v2, hash C4
- `git describe c1` => `v1_1_gC1`, 1 commits from v1, hash C1
- `git describe v2` => `v2`, v2 is v2 - `describe` is relative to anchors!

### Remote

Remote branches have a required naming convention of `<remote name>/<branch name>`, for example, `origin/master`.

`git clone` is used to create a local copy of a remote repository.

`git fetch` will fetch data from a remote repository. It does this with two main steps:
- Download the commits present in the remote but missing from local
- Update where our remote branches point (i.e `origin/master`)

`git fetch` will NOT change anything about your local state.

`git pull` is essentially a macro for `fetch`-ing and `merge`-ing remote changes in a single command.

These two sets of commands accomplish the exact same result:
- `git fetch; git merge origin/master`
- `git fetch` with local master checked out

<div class="mermaid">
stateDiagram-v2
	C0 --> C1
  C1 --> C2
  C1 --> C3
  C2 --> C4
  C3 --> C4
  note right of C3 :origin/master
  note right of C4 :master*

	rC0 --> rC1
  rC1 --> rC2
  rC2 --> rC3
  note right of rC3 :remote master
</div>

`git push`, on the other hand, will upload local changes to the remote repository.

This works great, until the Git history diverges. In this case, it is ambiguous how the files should be incorporated. This can be resolved a few different ways.

- By fetching and rebasing: `git fetch; git rebase origin/master; git push`
- Or, by using a pull with a rebase command: `git pull --rebase; git push`

<div class="mermaid">
stateDiagram-v2
	C0 --> C1
  C1 --> C3

  C1 --> C2
  C2 --> C3'
  note right of C3' :master*, origin/master

	rC0 --> rC1
  rC1 --> rC2
  rC2 --> rC3'
  note right of rC3' :remote master
</div>

- By fetching and merging: `git fetch; git merge origin/master; git push`
- Or, by using a normal pull: `git pull; git push`

<div class="mermaid">
stateDiagram-v2
	C0 --> C1
  C1 --> C3
  C1 --> C2
  C2 --> C4
  C3 --> C4
  note right of C4 :master*, origin/master

	rC0 --> rC1
  rC1 --> rC2
  rC1 --> rC3
  rC2 --> rC4
  rC3 --> rC4
  note right of rC4 :remote master
</div>

### Rebase vs. Merge

** Rebasing **

Pros:
- Makes your commit tree look very clean since everything is in a straight line

Cons:
- Modifies the apparent history of the commit tree

** Merging **

Pros:
- Preserves all tree history

Cons:
- Can be very busy

It all comes down to individual and team preference!

### Tracking Remote Branches

When a repository is cloned, native connections are created between identical local and remote branches. However, you can also manually create links between local and remote branches!

`git checkout -b foo origin/master` will create a new local branch `foo` that tracks to the remote `master`.

Similarly, you can use `git branch -u origin/master foo` to have the local branch `foo` track the remote `master`. If `foo` is already checked out, you can omit it from the original command.

### Advanced Push, Fetch, and Pull

#### Advanced Push

`git push <remote> <place>`

`git push origin master`

>Go to the branch named "master" in my repository, grab all the commits, and then go to the branch "master" on the remote named "origin". Place whatever commits are missing on that branch and then tell me when you're done.

You can also optionally change the destination:
`git push origin <source(local)>:<destination(remote)>`

This is called a "colon refspec," which is a word for a location that git can resolve, like `foo` or `HEAD~1`.

`git push origin foo^:master`

<div class="mermaid">
stateDiagram-v2
	C0 --> C1
  C1 --> C2
  C2 --> C3
  note right of C1 :master, origin/master
  note right of C3 :foo

	rC0 --> rC1
  note right of rC1 :remote master
</div>

This command takes 1 commit above `foo` (C2) and pushes it to remote and attaching it to the remote `master`, like this:

<div class="mermaid">
stateDiagram-v2
	C0 --> C1
  C1 --> C2:origin/master tracking remote
  C2 --> C3
  note right of C1 :master (unchanged)
  note right of C2 :origin/master
  note right of C3 :foo (unchanged)

	rC0 --> rC1
  rC1 --> rC2: pushing `foo^` (C2)
  note right of rC2 :remote master
</div>

You can also specify a new remote branch name as the destination value and the new remote branch will be created.

`<source>` is not tightly controlled, and can be used in some specific ways. `git push origin :foo`, for example, will delete the remote `foo` branch.

#### Advanced Fetch

`fetch` works very similar to push, just in reverse! Unlike `push`, however, the changes are fetched to your local copy of the remote branch by default and NOT your local branch. This is to help prevent losing work. That being said, you can use the `<source(remote)>:<destination(local)>` syntax to force a fetch to a local branch if desired.

You also can't fetch commits onto a branch that is checked out.

Just like `push`, `fetch` will create branches if a specified destination does not already exist.

Also similar to push, an empty `<source>` can be used to _create_ a new local branch. `git fetch origin :bar` will create the local `bar` branch. Seems more complicated than it needs to be, but hey.

#### Advanced Pull

As a reminder, `git pull` is really just shorthand for `git fetch; git merge`, even with all of the extra syntax.

`git pull origin bar~1:bugFix` is equivalent to `git fetch origin bar~1:bugFix; git merge bugFix`

