[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Homework : Counter Factory

<!-- MATERIALS METADATA -->
<!--
  title: 'Counter Factory'
  type: homework
  creators: Matt Brendzel
  competencies: javascript, dom manipulation, event handling
-->

## Setup

Make sure that you are on the `master` branch of your `wdi-remote-...` repo.
Then run `git pull upstream master` to pull the latest materials from the
instructors' repository. You shouldn't hit a merge conflict here, but if you do,
flag down an instructor right away.

<!--
Next, navigate to the directory for today, go into the `homework` directory, and
run `npm install` -- this will download any assignment-specific JavaScript
dependencies into to a directory called `node_modules`.

As you work through this assignment, you should make commits regularly.
In particular, since there are automated tests built into this assignment, we
recommend that you make a commit every time that you pass a new test, in
addition to any other time you feel might be appropriate (e.g. just before
trying out something new). -->

## Instructions

For this assignment, you will be creating a 'Counter Factory' web app -- this
tool will allow users to create counters and count with them using button
clicks.

Every time that you click the 'New Counter!' button, a new counter will be
created, and a new corresponding UI component for the counter will get added to
the bottom of the div with the id 'counter-list'. Each counter UI component in
the page needs to have the following format:

```html
<div class='counter' data-index='2'>
  <h3>Count: <span>0</span></h3>
  <button class='increment'> + 1 </button>
</div>
```

When the `<button>` is clicked, the number inside the `<span>` element should
increase by one.

  >  Formalizing the description above as a feature spec might produce something like this:
  >  1. When the 'New Counter!' button is clicked, a new counter appears on the
  >     page, containing:
  >     *  a visible count value
  >     *  a +1 (i.e. 'increment') button
  >  2. When the 'increment' button for a given counter is clicked, the count value
  >    shown on the counter increases by 1.

The `data-index` thing is a _**data attribute**_ -- it's a property of an
element that we can use to store relevant data. All such properties can be
accessed by grabbing the element from the DOM and referencing its `dataset`
property; specifically, to get the value in `data-counter-id`, we would need to
access a sub-property of `dataset` called `.counterId`.

> Data attributes can take any name you want to given them, so we could equally
> have called this property `data-banana` (and accessed it via
> `.dataset.banana`). But that would be silly, which is why we didn't do it.

This app is comprised of several standalone parts, each with different jobs that
they focus on. `CounterCollection` is a data model representing the underlying
data of our counters; in addition to storing the counter data, it is also
responsible for performing CRUD behaviors on the counters -- it can create new
counters, destroy existing ones, and either retrieve or update a given counter's
count value. `Presenter` is responsible for making changes to the DOM --
creating new HTML, modifying existing HTML code, etc. Finally, `AppController`
sits on top of the rest of the application, acting like the air traffic
controller or traffic cop; when new events occur, `AppController` responds and
moves relevant data from one place to another within the program. A more
detailed set of specifications can be found in the `spec` directory.

In order to make all of this work, you will need to complete two named functions:
`incrementCounter` and `addNewCounter`.

-   `incrementCounter` will take one argument, `i`; its job will be to go into
    the `counts` array and increment the value at index `i`
-   `addNewCounter` will be the click handler for the 'New Counter!' button.
    Its job will be
    (a) to add a new count value (starting at 0) to the `counts` array,
    and
    (b) to create a new counter element (corresponding to that new count value)
    inside the `<div>` with the id `counter-list`.

You'll also need to define an event-handling function for the +1 buttons -- this
handler should call `incrementCounter`, and then update the count value
displayed in the DOM.

<!-- ### Testing Your Work

A set of automated tests, written in the [Mocha.js](https://mochajs.org/)
testing framework, has been provided for you with this assignment.
To run these tests, navigate to the `homework` directory and type `npm test`
into the console. Test your work regularly, and read the feedback from the tests
carefully -- it may give you a clue about what to do next. -->

### Reach Targets

> NOTE: Do not attempt until **all** requirements are met.

Change the structure of a counter by adding a delete button beneath the '+ 1'
button. When this button is clicked, it should delete _that specific counter_
from the page, and not interfere with the functionality of any other counters.

## Submitting Your Work

When you're ready to submit your work,

1.  Push your code to your fork of the class repo.
2.  File an issue on the class repo titled "Your Name -- wXXdXX".

The issue should include:

-   A link that points back to your fork.

-   A 'comfort' score on how you feel about the material, from 1 (very
    uncomfortable) to 5 (very comfortable)
