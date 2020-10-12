---
layout: journal
title: "Pair Programming and Portfolio Progress"
excerpt: Pair programming with Neal on AGWSU and getting back into working on my portfolio.
author: Max Lepper
categories: [journal]
tags: [react]
date: 2020-08-25 23:08:00 -0400
modified_date: 2020-09-07 19:32:53 -0400
published: true
status: finished
confidence: log
importance: 1
context: true
skills: [react,redux,firebase,material-ui]
references: ["https://agwsu.org/","https://gitlab.com/neal.strobl/wsu-adventurers-guild/","https://gitlab.com/neal.strobl/wsu-adventurers-guild/-/issues/79"]
timespent: 290
sleep:
recreation:
workout:
---

## Journal

Getting on call with [Neal](https://gitlab.com/neal.strobl) for pair programming, he tasked me with working on [the "Implement User Dashboard" issue, #79]({{page.references[2]}}). This component is used by site admins to approve or deny new user sign-ups.

He sent me his designs and tasked me with determining which Material-UI elements I needed to import and how they should be assembled. I ended up going with a UserRequestsDashboard and a UserRequestCard element. The user request cards are each mapped to a full-width Grid item. The cards are, surprisingly enough, Cards containing the username and email as Typography tags wrapped in a Grid within the CardContent, with approval and denial Buttons also wrapped in a Grid within the CardActions. From there, I built out the components.

With that completed, the next step was collecting unapproved users, which was a Selector call filtered for all users with a false verification flag. Neal had already set up most of the Firebase framework as part of the users framework, so we were able to pull data from those functions with a few changes and additions to specifically collect all users.

Next was to pass the collected and filtered user data to the cards. We quickly discovered that, when using Firebase auth, you can only directly access the display name of the currently signed in user (probably due to privacy and permissions). We are already collecting a username as part of the sign-up process, so that needed to be added to the user documents.

Now that everything was plugged into place, we created a test user, logged into the User Requests dashboard, and:

{% include blog-img.html source="/assets/images/posts/2020/08/25/userapproval.png" alt="The nearly-completed user approval console" %}

Ta-da! The user properly populates. An email verification process is in place, as well. All that is left now is to hook up denial with a rejection message, approval, and mass approval with a confirmation modal.

Switching over to my portfolio site, I made a few quick adjustments. Perhaps most importantly, the First Kommand cement mixer project was removed from portfolio in exchange for Learning Log. I need to make more adjustments before this goes live, but I am looking forward to having all web development projects on my web development portfolio!

## Tasklist

- [x] Pair program with Neal
- [x] Add Learning Log as one of my portfolio projects
- [x] Start adding in the remaining learning resources I've encountered for sorting