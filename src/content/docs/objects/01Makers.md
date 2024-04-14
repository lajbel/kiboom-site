---
title: Why a maker? 
description: An introduction to the new way of creating objects in Kaboom.js
---

A maker in kiboom is only a function that receives a configuration and returns
a new game object. It have benefits, like be extendable and modifiable.

This is the same "prefab" concept in other engines like Unity. For example,
imagine you want to have a function for create `Hello World` texts.

```js
const addHelloWorldText = () => k.add([
  k.text("Hello world!"),
]);
```

It works pretty simple, but imagine you want to change the font, the position,
the color, etc. You need to change the function, and this can be a bit hard.

```js
const addHelloWorldText = (pos, color, font, opacity) => k.add([
  k.pos(pos),
  k.text("Hello world!", {
    font: font,
  }),
  k.color(color),
  k.opacity(opacity),
]);
```

This is a bit hard to maintain, and you need to remember all the parameters,
and even if you do an object parameter, you have to trouble with defaults, and
do it for every "prefab" you want to create.

Now, kiboom provides different object makers, and all of them extends the base
maker, `makeObject`. This already have a lot of properties, like `pos`, `scale`, 
`anchor`, `z`, etc.

```js
k.add(k.makeText({
  pos: k.vec2(100, 100),
  text: "Hello world!",
  textFont: "monospace",
  textColor: k.rgb(255, 255, 255),
  opacity: 1,
}));
```

Also, you can extend makers with new components, or new defauls, so for example
you can have a `makeHelloWorldText` or `makePlayer`.