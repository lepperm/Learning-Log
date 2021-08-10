---
layout: journal
title: "Getting Started With 30 Days of Machine Learning"
excerpt: Mixing things up with a dip into the first few days of Kaggle's 30 Days of ML course.
author: Max Lepper
categories: [journal]
tags: [python, "machine learning", blackjack, obsidian]
date: 2021-08-09 22:56:22 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [python]
references:
  [
    "https://github.com/kaggle/docker-python",
    "https://yare.io/",
    "https://realpython.com/null-in-python/",
    "https://wizardofodds.com/ask-the-wizard/blackjack/probability/",
    "https://stackoverflow.com/questions/63678723/is-there-a-python-equivalent-to-template-literals-in-javascript",
    "https://obsidian.md/"
  ]
timespent: 990
sleep: 0
recreation: 0
workout: 0
---

## Journal

{% include focus-box.html focus="Study" theme="Python" %}

## Task Management and Loss

On a whim many weeks ago, I signed up to get into a limited-time free 30-day machine learning course, and to be totally transparent, promptly forgot about it until the day one email came in - whoops!!

I have always been passionate about analyzing data and trying to uncover trends and patterns across individual samples, with this blog being a prime example (i.e. my statistics pages). Finding a way to elevate my technical capabilities in this personal thing that brings me curiosity and joy is something that I'm strongly motivated to do in general, so I am considerably excited for this course.

The timing is a bit awkward, however, as I had just made myself ill and a little burnt for nearly two weeks pushing myself to to my physical limit launching a client site by a deadline. During my downtime, I've taken a hard look at why I've been burning out so frequently and how I approach challenges. The conclusion I have come to is that I have outgrown my own systems.

To explain what I mean, let me provide some context. Five years ago around this time, my partner and I had been in wedding planning mode for the better part of a year and were coming up on the day. Over that time, I had become increasingly aware of different task management approaches and mechanisms, but was mostly using tiered checklists and calendars. You know, normie stuff 😛

Then, I suddenly and unexpectedly lost my Dad in a terrible way. That task management knowledge quickly became a crutch and scaffold to hold life together and keep moving, as the unfeeling march of time does not wait for the ones we've lost.

This system has grown and evolved drastically over the years, but at the core, checklists and due dates remained the chief driving force. Strings of ideas stitched along the passage of time, more plentiful than I should hope to realistically accomplish with a dedicated team, let alone by myself, persistently behind schedule, and breeding guilt, anxiety, panic, and overwhelm into my daily life and eventually my personal identity.

So yeah, that's not great.

Not like I fully realized all this, of course, until I started trying to smash things apart these past few days. I have new plans in motion, but that's a story for a different post (and more work on my end)! I have a few books to read on the matter, too. Migrating and building a new system will not be something that happens swiftly, this time, but I'm excited for the change and the journey ahead.

## Kaggle and ML

I had never heard of Kaggle before, and admittedly as I write this before starting the course, I'm still ignorant about what it is - some kind of ML/data science site, and it sounds like it runs notebooks?? I have no idea. But the course starts out gentle - make an account, here's what terms mean, make these changes, etc.

Reading the intro, it almost sounds like it's a data science bounty hunting site, which is...pretty badass. They also have datasets to pull from for data science projects, which would be very helpful - if I've heard one thing about data science, it's that it's 90% sanitizing data!

Kaggle allows users to run notebooks in the browser, so there's zero work involved with setting up my local environment (at least for now). The challenge it's having me enter is, given a subset of information about Titanic passengers, I need to determine how many people from the remaining passenger list survived. Kind of morbid, but interesting nonetheless. There is information like economic class and family structure for each passenger, as well, and I'm immediately curious exactly how those would have influenced survival rates.

### Day 1

In my first code book, they provide a [link to the Docker image]({{page.references[0]}}) for the environment used, so that'll be perfect for continuing with what I learn here this month.

Now we're starting to get some definition around Python libraries I've seen referenced before:

- `numpy` => linear algebra
- `pandas` => data processing

While I don't understand the specifics, I'm following along in a pseudo-code type fashion. Essentially, I was given code snippets to analyze survivors against the sample data with respect to trees of multiple characteristics, and then produce a model that fits that prediction.

For a brief hand-held dip into ML, this doesn't seem too bad! To top it off, I've leveled up to "contributor" on Kaggle now too! I had other commitments on the first day, so I'm a day behind already... 😬 - no sweat, moving on!

### Day 2

The next lesson starts to get into Python. I had dabbled in Python years ago on Treehouse, but the format didn't stick with me very well at the time. Approaching things now, I'm definitely finding that I have an appreciation for the readability of Python's syntax. I won't go into too many details of the lesson, as this exercise covers data types, operators, and some built-in functions. Python's emphasis on intentional whitespace is, coming from a different language, probably the biggest takeaway.

After the intro segment, there were some syntax questions to solve. Working with notebooks is very interesting, as incrementally generating new values makes it accessible in different code blocks. Out of curiosity, I tried declaring a parameter in a lower code block and running the block, and it does expose that variable to new runs of earlier code blocks! This is something to be mindful of, as I could see this possibly causing unexpected errors.

### Day 3

Day 3 gets into functions in Python, both built-in and self-declared. Right away, it gets into using docstrings to document functions, which is definitely helpful! Here's the example given:

```python
def least_difference(a, b, c):
   """Return the smallest difference between any two numbers
   among a, b and c.

   >>> least_difference(1, 5, -5)
   4
   """
   diff1 = abs(a - b)
   diff2 = abs(b - c)
   diff3 = abs(a - c)
   return min(diff1, diff2, diff3)
```

The course mentions that Python's `None` is similar to `null` in other languages, so that got me curious to look up [more information about `None`.]({{page.references[2]}}) The blog linked gets deep into things, like the difference between how `None` evaluates with equality operators vs identity operators, and how Python tends to reuse objects and so it's best to initialize with `None` and then evaluate or reinitialize objects like arrays back to `None` before use.

We briefly touch on higher-order functions before moving into the exercises. It makes perfect sense in retrospect, but one point mentioned was that negative values can be used for the number of decimal places parameter used in `round`. This will round the number to the nearest 10th, 100th, and so forth, which seems like a quick way to go about things.

### Day 4

Today is booleans and conditionals! I learned that there's an order of operation for operators like `and`, `or`, and `not`:

1. `is` and related
2. `not`
3. `and`
4. `or`

... or we can just use parenthesis and make things more explicit to the reader. Their suggestion of breaking each primary cluster of conditions in a long sequence up over multiple lines to show emphasis is great, and I'm glad that Python allows for this.

The challenges were a bit more interesting today, such as trying to find errors in a boolean sequence, and making unique combinations succinctly. There was also a bonus challenge to make conditions to play Blackjack! I got wayyy into this and had a ton of fun iterating over conditions. Comments were left in to explain what's happening, since this isn't production code. I didn't get too wild with things, but here's what I ended up with:

```python
# I know globals are to be avoided, but I'd like to do something fun for natural blackjack deals!
deal_number = 0

def should_hit(dealer_total, player_total, player_low_aces, player_high_aces):
    """Return True if the player should hit (request another card) given the current game
    state, or False if the player should stay.
    When calculating a hand's total value, we count aces as "high" (with value 11) if doing so
    doesn't bring the total above 21, otherwise we count them as low (with value 1).
    For example, if the player's hand is {A, A, A, 7}, we will count it as 11 + 1 + 1 + 7,
    and therefore set player_total=20, player_low_aces=2, player_high_aces=1.
    """
    # --- Configurations
    # >>> Specify what player score (0-21) should be the minimum that we stand on
    score_hit_limit = 17

    # --- Functions
    # Calculate our likelihood of busting
    # (not accounting for the percentage likelihood of draws based on cards in play)
    def calc_risk(points_until_bust):
        bust_points = 0
        i = 1
        while i < 11:
            if points_until_bust < i:
                bust_points += 1
                # Don't forget the jack, queen, and king
                if i == 10: bust_points += 3
            i += 1
        percent_risk = bust_points / 13.0
        return percent_risk

    # Track which hit we're on per hand
    global deal_number
    deal_number += 1

    # Print some contextual information to the console (otherwise nothing is shown)
    print("--- Round ", deal_number, " ---", sep='')
    print("Dealer: ", dealer_total, sep='')
    print("Player: ", player_total, " ", player_high_aces, "H", " ", player_low_aces, "L", sep='')

    # --- Stand conditions
    # Best-chance win
    if (player_total == 21):
        if (deal_number == 1):
            print("Blackjack, baybeee! 🥳")
        return False

    # --- Hit conditions
    # Confirmed safe hit, exit early
    if (player_total < 11): return True
    # Confirmed safe hit, exit early
    if ((player_total <= score_hit_limit ) and (player_high_aces)): return True

    # --- Hit risk decision logic
    points_until_bust = 21 - player_total
    percent_risk = calc_risk(points_until_bust)
    print("Bust likelihood: ", round((percent_risk*100.0),2), "%", sep='')

    # The percentage (in 0.0-100.0) amount of bust risk we are willing to accept before hitting
    bust_risk_maximum = calc_risk(21-score_hit_limit) * 100.0

    # Is it worth the risk?
    if (percent_risk > bust_risk_maximum):
        # Nope, stand
        return False
    elif (player_total < score_hit_limit):
        # Sure, hit me!
        return True

#q7.simulate_one_game()
q7.simulate(n_games=10000)
```

This is exactly something that I'd love to use machine learning to dig deeper into! Blackjack isn't a game that I've done any research on, but I feel like the general consensus is to stay at 17, so that's where I set my `score_hit_limit` variable, which is used to determine when to stand.

Truthfully, I have no idea what the true best option would be. Maybe it should be higher, maybe lower? Maybe better taking into account the cards the dealer is showing could mitigate some of that risk? The qualifiers I wrote are essentially how I play Blackjack in real life, so please send me your pointers before I ever end up in Vegas! 😂

That being said, I can easily evaluate things a little bit more with what I currently have! I took some samples for reference:

| `score_hit_limit` value | Sample size | Win rate |
| ----------------------- | ----------- | -------- |
| 0                       | 10000       | 40.0%    |
| 1                       | 10000       | 39.9%    |
| 2                       | 10000       | 40.1%    |
| 3                       | 10000       | 39.0%    |
| 4                       | 10000       | 40.1%    |
| 5                       | 10000       | 39.1%    |
| 6                       | 10000       | 40.8%    |
| 7                       | 10000       | 39.8%    |
| 8                       | 10000       | 39.6%    |
| 9                       | 10000       | 40.5%    |
| 10                      | 10000       | 39.7%    |
| 11                      | 10000       | 39.6%    |
| 12                      | 10000       | 40.8%    |
| 13                      | 10000       | 41.4%    |
| 14                      | 10000       | 41.8%    |
| 15                      | 10000       | 42.2%    |
| 16                      | 10000       | 41.6%    |
| 17                      | 10000       | 41.0%    |
| 18                      | 10000       | 40.3%    |
| 19                      | 10000       | 36.6%    |
| 20                      | 10000       | 29.4%    |
| 21                      | 10000       | 15.2%    |

To my surprise, standing above scores in the 14-16 range, or 46.2%-61.5% bust risk, seem to perform the best! You can see where the win rate holds pretty consistently, and that's because our hit risk percentage drops to 0% when our score is 11 or below, and we automatically hit. From this, my hypothesis is that the dealer winning ties is the primary element driving the win rate down from 50%.

{% include blog-img.html source="/assets/images/posts/2021\08\09\results_graph.png" alt="A chart illustrating win rates over minimum player points (assuming bust risk) before holding. 15 cards is the highest point in the curve before win rates begin to drop sharply." %}

As a control, I took out all of my logic to see how that impacted win percentage. After a much faster run, it performed around 38.0%. This means that my code was functionally not as much of an improvement as I had hoped, but an improvement nonetheless, thank goodness!

One more thing to check - I'm sure that there's an already-determined benchmark for overall win probability somewhere. With some digging, I ended up in a thread where a user claims [the probability of an overall win in blackjack is 42.22%, a tie is 8.48%, and a loss is 49.10%]({{page.references[3]}}). It might be a hefty coincidence, but 42.2% is right around what I saw as the peak, as well!

That ended up being more of an exploration than I intended, but it felt very informative. The homework itself took less than half of the time I spent running tests and prodding the Blackjack results around.

### Day 5

Today gets into lists and loops! Slicing lists in Python has a neat and easy syntax:

```python
#Slicing a list of planets in our solar system like this:
planets[0:3]

# Would produce a list like this:
['Mercury', 'Venus', 'Earth']

#That's because slicing includes the element within the start index and 
#every element up to - but not including - the final index, 
#which is why we get 3 planets back instead of 4.
```

You can also omit the index on either side of the `:` to get every element up until that end of the list. This also works with negative indexes to get (or omit) elements from the end of the list.

The section goes on to describe how _everything_ in Python is an object, even numbers! Turns out, many objects will have both attributes (or non-functional values) and methods (or functions attached to an object). While these attributes and methods on things like numbers and booleans are pretty obscure and specialized, like `imag` for imaginary values for complex numbers, lists have quite a few that will be used often:

- `list.append()`
- `list.pop()`
- `list.index()`
- `list.remove()`
- `list.sort()`
- and many others

Next, we get into tuples. Whereas lists in python are mutable, meaning they can be modified, tuples are immutable.

```python
# We use square brackets to assign lists:
my_list = [1, 2, 3]

# Tuples, however, are assigned with parentheses, 
#or simply multiple values separated with commas:
my_tuple = (1, 2, 3)
my_other_tuple = 1, 2, 3
```

Getting into lists, the guide says that "list comprehensions" are one of Python's most-enjoyed features. As an example:

```python
squares = [n**2 for n in range(10)]
squares
```

will produce

```
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

Taking things a step further, we can add transformations and `if` conditions:

```python
# str.upper() returns an all-caps version of a string
loud_short_planets = [planet.upper() + '!' for planet in planets if len(planet) < 6]
loud_short_planets
```

which produces

```
['VENUS!', 'EARTH!', 'MARS!']
```

This can get somewhat difficult to read, so it can also be broken out to multiple lines, as such:

```python
[
    planet.upper() + '!'
    for planet in planets
    if len(planet) < 6
]
```

Going further still, the tutorial gives an example of simplifying code to a single-line return.

Starting with

```python
def count_negatives(nums):
    """Return the number of negative numbers in the given list.
    >>> count_negatives([5, -1, -2, 0, 3])
    2
    """
    n_negative = 0
    for num in nums:
        if num < 0:
            n_negative = n_negative + 1
    return n_negative
```

they condense this operation to

```python
def count_negatives(nums):
    return len([num for num in nums if num < 0])
```

While being succinct is important in programming, I can see how this approach would be a slippery slope to the line of exchanging readability for being clever. The content of the example itself isn't bad, but it's also easy to see how quickly it could become needlessly confusing, whereas breaking it out over 3-4 lines may help better direct the reader's focus and allow for more explicit variable names.

That being said, I immediately started using it on the exercises following, haha.

No extra credit challenge today, but it did end with another casino-based question, this time around slot machines. The question was, given `n` pulls of of a slot machine, determine the average payout per-pull. Given the high variability of payout, it took getting up around an `n` value of over one million before the results started to even out to about $0.02/pull.

This got me looking into real-life slot machine trends. It sounds like the industry standard for the cycle time of a single slot machine pull is right at 6 seconds, no more and no less. Actual gamble-to-payout ratios seem to be a more guarded secret and probably different with the formula being used when I call `play_slot_machine()` in the notebook, so I'll stick with the $1 per pull rate specified for this example.

The fact that `play_slot_machine()` has a positive per-pull value at all should have been a quick indicator that this function is unrealistic to real life. Doing some more searching, real slot machines have a return-to-player (or RTP) of between 92%-97%, which is fixed by the manufacturer, meaning that they will ALWAYS take in more money than they pay out over their lifespan.

But to heck with realism! It seems a little impractical to play slots 69.4 days straight in the casino 24/7 without sleeping or eating, so let's take a look at something maybe more practical... if that's really the term we want to use. Let's say you want to make slots your full-time gig and play 8 hours a day, and that you have some amount of starting cash. How long can you go before you bankrupt, or if you have a successful career, how much will you take home?

This goes way beyond the original scope of the problem, but was fun to think through. I also [learned about f-strings]({{page.references[4]}}) along the way, which are so much nicer to work with than chaining things in print.

While the odds in this simulated game are definitely much better than real-life slots, this was a fun practice exercise that produces either how successful you end up over a certain stint of your career, or tells you exactly which pull finally bankrupts you. For my simulations, I'm starting with $1000 and aiming to make it through a whole year, working 8 hours in the casino a day while taking weekends and US holidays for myself (or 1,257,600 pulls) - gotta still have work-life balance! Below, I've included some samples:

A typical run:

```
Day 1 you end with $1103.50
Day 2 you end with $905.50
Day 3 you end with $249.50
Day 4 you end with $782.50
Day 5 you end with $350.00
Day 6 you end with $0.00
Your professional slot-puller career was cut short when you bankrupted on day 6 during pull #1686

```

A swift end:

```
Day 1 you end with $0.00
Your professional slot-puller career was cut short when you bankrupted on day 1 during pull #2187
```

My first successful year:

```
Day 1 you end with $916.0
Day 2 you end with $780.0
Day 3 you end with $1211.0
[...]
Day 260 you end with $34292.0
Day 261 you end with $34036.5
Day 262 you end with $33878.0
Over the course of 262 day(s), playing slots for 8 hours each day to a daily total of 4800 pulls,
your pull in a grand total (minus your initial investment) of $32878.0,
or an average of $125.49 a day or $15.69/hr, at $0.03 per pull.
```

The vast majority of runs end in bankruptcy within the first two weeks, so I'm going to keep my day job!

### Day 6

Day 6 is strings and dictionaries, and it opens by saying that string manipulation patterns come up often in the context of data science work.

As you'd expect, it mentions mixing single quote (`'`) and double quote (`"` ) characters, and using backslashes to escape characters within strings as needed. Using triple double quotes (`"""`), Python will print literal newlines without the use of `\n`.

Strings are _also_ somewhat like lists, in that we access individual characters within the string using square brackets by their index, but the contents are immutable.

While I stumbled across f-strings yesterday, the `.format()` function for strings also seems quite powerful, allowing you to include rapid formatting options within the template, rather than having to build them into the string directly or manipulate the values.

Dictionaries are made up of key and value pairs and pulls together many of the concepts covered so far:

```python
planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
planet_to_initial = {planet: planet[0] for planet in planets}
for planet, initial in planet_to_initial.items():
    print("{} begins with \"{}\"".format(planet.rjust(10), initial))
```

...produces the output

```
   Mercury begins with "M"
     Venus begins with "V"
     Earth begins with "E"
      Mars begins with "M"
   Jupiter begins with "J"
    Saturn begins with "S"
    Uranus begins with "U"
   Neptune begins with "N"
```

The challenges today were all about manipulating strings to find matches, and building dictionaries. My biggest takeaway was to first initialize the list values for keys in a dictionary with `dictionary_name.setdefault(keyword,[])`. To simplify things, you can chain this with a `.append()` to act as a double-check to make sure values exist before trying to write to them.

### Day 7

Today is external libraries! I've already done this a little bit with the `math` and `re` libraries while messing around, and also during the Titantic exercise at the very beginning of the course (which seems like ages ago now!).

Imports in Python appear to behave similar to JavaScript, where you can set aliases, and perform starred imports (if you're feeling risky 🤠), as well as explicit imports.

This section warns that there will be an endless torrent of strange and new information to dig into, but offers three tools to help learn and navigate along the way:

1. `type()` (what is this thing?)
2. `dir()` (what can I do with it?)
3. `help()` (tell me more)

Python also gives library creators control over how basic operators are used with custom data types, which leads to operator overloading. As an example, in `numpy`, you can perform operations such as `rolls <= 3` to get an array response showing a boolean result for each index in `rolls`.

Turns out, some of those `__method__` values we see when we run `dir()` are directly related to operator overloading. As an example, `x in [1, 2, 3]` is calling the list method **contains**, allowing for a simpler call than the expanded form `[1, 2, 3].__contains__(x)`.

The challenges for today are the most detailed by far. The first one starts out mentioning the results from the slot machine challenge and how you could stand to make money over time - exactly the exploration I dove into! Subsequent questions dealt with things like colliding variables and briefly touches on something akin to creating our own operator overloads.

This first leg of the ML course caps off with creating a blackjack score evaluator, given a list of cards by name (so number cards, as well as J, Q, K, and A). After a little bit of work, my tests passed, and the default solution was revealed. Interestingly enough, while I had popped my aces out as "high aces" and then downgraded when above 21, the default solution pulls them out as "low aces" and upgrades. Reviewing the payloads the test sent, my approach will ultimately run more cycles than the default, so that pretty clever.

All-in-all, I'm excited with how this first week has gone, and I'm looking forward to digging deeper into the data science side of things while improving my Python!

## Other Bits

A friend shared [yare.io]({{page.references[1]}}) with our group, which is a JavaScript-based real time strategy game! The tutorial took a minute to wrap my head around, but reading the documentation got me thinking of all kinds of different approaches and strategies. I got things to the point where units would divide into teams and only try to pick off smaller numbers of enemies, and then retreat to the nearest recharge point if under a certain health threshold or if out of energy, but then realized that I had plenty of other work to be doing. I'll absolutely be coming back to this, though!

Silver is Gold is a little bit quieter lately, which works out great with everything else going on. I made a few adjustments to user accounts and profiles, and tied the blog into the menu so that it was properly accessible, so that our Del Mar Fellow can start creating posts. They're reaching out to local businesses and individuals, so it'll be exciting to see what happens.

There are a few site projects I'm itching to ramp up in the near future. I've created some wireframes and rough drafts on paper, but have been curious to take it to the next level. I know I've looked into design platforms on here previously, but I was curious what other real people are using, and launched a Twitter poll:

<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">When designing a new website, what primary tool do you use to develop the layout, if any? If you&#39;re not using a tool, why not? <a href="https://twitter.com/hashtag/ux?src=hash&amp;ref_src=twsrc%5Etfw">#ux</a> <a href="https://twitter.com/hashtag/CodeNewbie?src=hash&amp;ref_src=twsrc%5Etfw">#CodeNewbie</a></p>&mdash; Max Lepper (@MaxLepper) <a href="https://twitter.com/MaxLepper/status/1422922862155997186?ref_src=twsrc%5Etfw">August 4, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Most of the responses emphasized just creating wireframes by hand or digitally. Re-reading, I realize that I had worded my question poorly, as I specifically had meant more of the refinement-stage design. Regardless, this re-emphasis of wireframes was still helpful, and I was exposed to some new tools! I might sit on my designs while I'm busy with other things and then come back to them later with fresh eyes.

From my own research, it does sound like Figma is probably going to have the most flexibility and transportability out of the options, so that's where I'm currently leaning, as much as I keep looking at Framer and InVision. I believe that there may be a great opportunity to learn these tools at my day job, as sending working prototypes to customers for vehicle HMIs would be well above-and-beyond anything else I've encountered in the industry, and provide for a more efficient feedback vehicle on the design.

I've also gotten into using [Obsidian.md]({{page.references[5]}}) in my day job and, currently to a lesser extent, in my personal life (mostly because my work day has a fairly rigid structure that I can only influence so much). It's a platform to encourage non-linear thought with an emphasis on owning your own data, and I'm enjoying it a lot! At work, I'm journaling daily to record my tasks, notes, and setting goals and affirmations for the day. It is extremely helpful to track day-to-day discoveries and challenges in context.

Another huge benefit of Obsidian for personal use is that, after some work and patience, I can now use a combination of Obsidian, a community plugin, Calibre (my e-book manager), and my Kindle to be able to read on the go and then pull in all of my highlights and notes. This allows me to then take those notes and highlights and tag them, mark them for timed review, create flashcards, and generally help me to better recall and utilize the content I encounter. I'm incredibly excited to put my notes and reading to better use!

It may be a while, as I'm trying to be careful and take my time with new processes, but I would like to write something up about these new approaches eventually!

### Time Breakdown

Here's a breakdown of my time over this past week:

- 8/3
  - 2h
- 8/4
  - 3h
- 8/5
  - 3.5h
- 8/6
  - 4.5h
- 8/7
  - 1.5h
- 8/8
  - 2h

## Gratitude

### What is going well?

August is going to be an extremely busy month, but we have most of our plans figured out and that is a definite source of comfort, with a short trip near the end of the month as something to look forward to. My new work process has been giving me a surprising sense of calm in my day-to-day, and I am loving the reduced stress, knock-on-wood.

### What could be better?

With processes broken apart and hanging in limbo, there are times where I certainly feel uneasy and stuck. My notes and tasks are a somewhat scattered across different platforms, and some information has been difficult to find or recall. I'm also having difficulty keeping on top of my life and project obligations while also pushing the needle forward on constructing my new processes, so it's been a slow process. But a good and forward-moving process, nonetheless! I'm excited to see what grows from these seeds.

## Tasklist

- [x] Get started with the course!
- [x] Update my Calibre library and get everything all copied and synced up with my Kindle
- [x] Test syncing notes from my Kindle to Obsidian
