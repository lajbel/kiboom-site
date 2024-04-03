---
title: Introduction 
description: A introduction to kiboom()
---

kiboom is a Kaboom.js plugin that mainly provides a set of new "factory"
functions, made for create new easily modifiable objects.

Create your own factory functions can be a bit hard, you need to make the
functionality of

- Creating the object
- A user passable configuration object
- A default configuration object

What if for example you want to **extend** objects?

- You need to create a new object
- Copy the properties of the old object
- Extends configuration

Well, kiboom does all of this for you, and more!

## The new way of creating objects
kiboom provides a set of new functions that makes creating objects a breeze. All
are prefixed with `makeXXXX`, this create the object without
[adding them](https://kaboomjs.com/#make) to the scene.

But all starts with `makeBase`, this is the base game object of kiboom, instead
of set pos, anchor, scale, etc, you pass a configuration object, and it will set
the properties for you.

```js
const myGameObject = makeBase({
  pos: vec2(100, 100),
  anchor: "center",  
});
```

There's a lot of other functions, like `makeSprite`, `makeText`, `makeRect`,
etc. We will see them in the next sections.
