---
layout: post
title: "Risk Mitigation in Planning Learning"
date: 2020-08-27 21:14:26 -0400
modified_date: 2020-08-22 13:55:38 -0400
published: true
author: Max Lepper
categories: [blog]
tags: [risk management]
excerpt: A quote kicks off a mental exploration of risk management in the context of learning new material and limited time.
---

This morning, I opened a new tab on my computer to see the following quote prominently displayed:

>“All courses of action are risky, so prudence is not in avoiding danger (it's impossible), but calculating risk and acting decisively. Make mistakes of ambition and not mistakes of sloth. Develop the strength to do bold things, not the strength to suffer.”
>
><cite>— Niccolo Machiavelli</cite>

"How alarmingly apt," I thought, as this had been more or less my mental theme for the previous day. I would normally take a few minutes to roll the quote and message in my head and then get on with my day, but this is something I should record for myself. It is a good opportunity to capture my mentality, my current challenges, and to look back for insights into what I could have done better.

### Table of Contents

* TOC
{: toc}

### Discussion Framing

"Risk mitigation" is the term I use when it comes to planning and accounting for risk in my actions. All actions carry risk and have an inherent cost, which can effectively increase the true cost of the action. The cost is paid in terms of resources. This may seem abstract, but I will define some resources to frame the discussion.

Let's assert that **time** is the most valuable resource available to any person, as it is the singular means in which we are able to execute actions to influence the world. Let's also assert for the purposes of this discussion that time is a finite resource. I realize this assertion in itself is complicated; economic and social privilege greatly influence the maximum potential time available for you to utilize.

Let us then assert that the second most valuable resource is **health**, as physical health gives us the energy and utility to conduct actions with our time. Our ability and efficiency in conducting actions proportionally diminishes with quality of health.

I realize the axiom of the Great Beast, Capitalism, is that **money** is the most valuable resource; I will claim it takes the third spot, as we are speaking in more absolute terms. Money is the multiplicative wild card that influences all other resources. Without wealth, minimal resources and increased health risks can be a fact of life. Those with access to wealth are, conversely, capable of making larger influences more quickly. They may also live longer, healthier lives due to being able to afford any and all necessary healthcare.

I believe **information** - the factual kind - sits quietly and immediately behind money. This is because especially for our youth, high quality information is sometimes behind multiple barriers (such as a lack of access to good education or even the internet) which could be removed with money. Information begets information, and it allows the utilization and growth of resources and risk awareness. Free and open access to information is certainly at its highest rate in human existence so far, but this can be useless without understanding how to collect and properly use the available information.

There are more major resources, such as social connections (peer learning is a fantastic process), and I only briefly touched on socioeconomic imbalances (which heavily skew everything), but I want to stop here to focus, from a neutral perspective, on the immediate internal decision-making and planning process.

So, we've established our resources, but what is our objective, and what is the course of action to get there?

### Objectives and Actions

Given limited resources, we want to:

- Maximize the returned value of actions
- Minimize the impact of risk associated with those actions

(Oh hey, "calculating risk and acting decisively")

From personal experience, it's easy to slowly and poorly commit to a course of action, only to eventually realize that you have effectively nothing to show for it. Similarly, following a course of action without considering the risks can introduce a multitude of failure points, such as running out of resources, a forced shift of priorities, or ultimately wasted effort.

To shift from theory to the specifics of Learning Log, my **action** is to log and prioritize my development learning and notes for the **objective** of obtaining employment in a new career field.

This objective has a somewhat nebulous external time limit, as there have been mentions of layoffs at work. Additionally, the sooner the objective is achieved, the sooner my personal learning efforts will be aligned with my career, and I can spend an exponential amount of time learning the material and developing my skills.

(For the record, web learning has also been for personal enjoyment and self-actualization, but that's a difficult target to measure and therefore more of a bonus in the context of this discussion.)

### Risks in Planning Learning

As time is my most valuable resource, the biggest risk to successfully achieving my objective is that I utilize my time sub-optimally. Sub-optimal time utilization in this case means not fully processing new information, not reinforcing and using new information, and not prioritizing learning the "correct" information.

{% capture callOut %}
"Now, hold up," I hear you think, "didn't you spend something like 2-3 weeks building a blog with a bunch of bells and whistles in a different language and framework than your key focus?"

Yes, I did.

**However**, I spent 2 months working on React/Redux/Firebase prior to that, but did not have a good process for capturing and reinforcing information, and wasn't yet able to easily identify low-quality information. I picked up some fundamentals, made some sites, completed some tutorials, and got over some fears and hang-ups, sure, but I found myself struggling with recalling the basics due to learning many different things across various levels of complexity. On top of this, I was learning all new frameworks, IDEs, languages, and hardware profiles at my day job in industrial electronic controls development, so it was whiplash slamming my mental gears back and forth every day and night. It got to a point where I was wondering if I had actually learned anything at all.

In hindsight, I had learned quite a bit on the technical side, but I mostly got a better understanding for what it would take to ultimately be successful, and if I could handle it. It took a while to get Learning Log up and running, but now it largely runs itself, and all I really need to do is write posts and log my time. Looking at my skill progression entries and my site statistics fills me with confidence and encouragement that, _yes_, I **AM** making progress, I am learning and growing, and that I can do this. Now when I work on AGWSU and my Portfolio, I know that I can contribute and do quality work. When I work on a tutorial or read through documentation or watch a conference, I know that I am following my current best understanding of what I should do to develop my understanding of the skills in question skills.
{% endcapture %}

<div id="call-out" hidden=true>
  <div>
    {{ callOut | markdownify }}
  </div>
  <a id='hideLink' style='cursor:pointer;' onclick="hideDone()">(Hide ↑)</a>
</div>
<a id='showLink' style='cursor:pointer;' onclick="showDone()" title="Click for more context on Learning Log and how it specifically applies to this process">But wait a minute...</a>

<script>
  const callOutElem = document.getElementById("call-out");
  const sLinkElem = document.getElementById("showLink");

  function showDone() {
    callOutElem.removeAttribute("hidden");
    sLinkElem.setAttribute("hidden", "true");
  }

  function hideDone() {
    callOutElem.setAttribute("hidden", "true");
    sLinkElem.removeAttribute("hidden");
  }
</script>

There are other external risks that I have been evaluating, but since external factors can usually only be minimized at best, I will be focusing specifically on factors within my immediate influence.

To further break down risks in the form of poor use of time, I've split this into two major categories:
  - Incorrect learning prioritization
  - Low information comprehension and retention

Each category has its own costs, contributing factors, and mitigation approach.

#### Incorrect Learning Prioritization

Incorrect prioritization when learning a new subject is, arguably, one of the highest likelihood risks to overcome. You don't know what you don't know, and you're relying on seeking out high-quality resources to help steer the course of your entire learning experience. You may not know that you've been heading in the wrong direction until you've sunk considerable resources!

##### Contributing Factors

- Unsure where to begin
- Unsure of what is high-quality or high-value content
- Unsure of an effective learning sequence
- Unsure when to use what tools
- Unsure of which skills are important to learn in the first place

##### Resources Consumed

- Time
- Money (depending on learning approach)

##### Risk Mitigation Plan

I am very fortunate in that many of my friends are already developers, so I have access to many great connections to ask questions and for help. Discussions with my friends have helped to guide me towards skills that are currently in demand, where to get started, and what tools to use.

Determining high-quality learning content, however, has been a learning experience. I have discovered and had some great resources referred to me, but I have also organically encountered information that was either low quality, or too complex (out of sequence) to impart helpful information. Determining sequence is currently my next challenge with this site, as I have amassed a collection of resources that seem to be regarded as high-quality learning materials among other learners, and I need to sort and order them in a sequence that will allow for efficient skill progression. A properly sequenced learning item list will also make my Skills table progression value a more direct representation of my approximate familiarity with core skills.

#### Low Information Comprehension and Retention

Information comprehension and retention is an ongoing resource management struggle. You're not just devoting time to expose yourself to the material, but you also need to allow for mental time to recharge, ample sleep, repetition, exercise, proper nutrition, and focused practice.

##### Contributing Factors

- Physical resource deprivation
  - Poor sleep
  - Not enough exercise
  - Poor nutrition
- Mental burnout
  - Not taking breaks regularly
  - Poor content pacing, overloading/cramming
  - Not allowing for recreation
- Lack of focus
  - Not properly blocking distractions
  - Non-value-add tasks taking up the majority of time spent
  - External stressors (COVID-19, protests, etc.)

##### Resources Consumed

- Time
- Health

##### Risk Mitigation Plan

I struggled with this for the first few months. I was taking on more than I could handle, and spending every free minute trying to absorb and expose myself to as much information as possible. I knew better, but with a looming and ambiguous deadline, I wanted to immerse myself as much as possible - let's call this a "mistake of ambition." I burnt out twice trying to find a good and sustainable cadence, and you can see this reflected in my GitLab activity chart:

{% capture image %}
![My nice new tabs]({{site.baseurl}}/assets/images/posts/2020/08/27/GitLab.png){: style="vertical-align: bottom;padding-top: 1.2em;padding-bottom: 1.2em;"}
{% endcapture %}
<div style="text-align: center;">
  {{ image | markdownify }}
</div>

Dr. Barbara Oakley's [Learning How To Learn](https://www.coursera.org/learn/learning-how-to-learn#about) course is a fantastic resource, and one that I wish I had experienced years ago. Try as I could to overcome physical limitations, the lessons from the course hold strong, and I am trying to practice the teachings better. I now use an AHK macro called FlowTime to help me manage breaks in a slightly more flexible format than Pomodoro, and I try to make an effort to make time for recreation (something I have always struggled with 😬).

This Learning Log site has also helped me to focus in more tasks. I've mentioned in previous logs that I was trying to migrate board tasks out of my Todoist account, and I have similarly made an effort to create issues in GitLab for other projects instead of tasks. This helps to keep me more focused in the mode of work I'm operating within, rather than changing levels of focus and not being as productive as possible. I have also given up multiple monitors for a single large monitor, which allows me to fill my workspace with only what I'm working on and nothing extra, helping me to focus in without notifications popping up on a second screen.

### Conclusion

I'm sure there's a tidy, Bayesian way to model the expected value of courses of actions given my current information, which is something I would like to practice more. In lieu of performing the math explicitly, I hope that I have been able to demonstrate my thought process and how I seek to tackle complicated tasks with limited resources. The balance of time, health, money, and gathering information is delicate and fluctuating, but by learning what you can and identifying risks, ambitious actions can help you to chase the dreams you have always wanted to follow.