---
title: 'Layout Minis: Container'
description: 'How to limit container width in the pures way possible.'
pubDate: 'Jul 8 2023'
---

This is an article about a problem, that has been solved a million times before.
But I feel most of the solutions are overengineered.
So I want to reduce the solution to the bare minimum.

## The problem

Content of websites is often limited to a certain width on large screens.
We do this to improve focus and readability and we usually call them containers or wrappers.

On smaller screens we want to use *nearly* the full width of the screen. So those containers also have to scale down.
We use Nearly the full width, because we don't want the content to be glued to the edges of the screen.

## The solution

```css
.container {
  max-inline-size: var(--container-max-width);
  margin-inline: auto;
}
```

By using `max-inline-size` we allow the container to scale down on smaller screens but limit the maximum width at the same time. `margin-inline: auto` centers the container.

If we only set a maximum width, how do we add space on the left and right side of the container?

Well, behold the power of CSS! 🧙

## A magical custom property

First of all, you don't have to use a custom property for this, but it increases the reusability of the solution.

```css
:root {
  --container-max-width: clamp(18rem, 90vw, 76rem);
}
```

We use the `clamp` function to set a minimum and maximum value for the container width.
And by choosing a smaller minimum than the smallest screen size we want to support, we add space to both sides of the container.

### How does clamp work?

`clamp` has 3 parameters:
1. a minimum value
1. a scaling function
1. a maximum value

That means the value will always be at least the minimum value, but never more than the maximum value.
The scaling function is used to calculate the value between the minimum and maximum.

### Adjusting the container width

We choose a minimum value of  `18rem`, which is 288px. If you add 16px to the left and right, you get **320px**, which is the width of an iPhone 5 in portrait mode. 320px might be the smallest width we want to support.

The maximum value is `76rem`, which is **1216px**. On screens wider than that the container will be centered.

*If your project uses differend limits, you can adjust the minimum and maximum value to your needs.*

## Full example

```css
:root {
  --container-max-inline-size: clamp(18rem, 90vw, 76rem);
}

.container {
  max-inline-size: var(--container-max-inline-size);
  margin-inline: auto;
}
```

## Final thoughts

I want to point out the simplicity of this solution.
You can use this in any project.
You don't even need a breakpoint for this.
This is truly as pure as it gets.

Have a good one! 👋
