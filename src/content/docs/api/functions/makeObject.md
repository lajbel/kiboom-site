---
editUrl: false
next: false
prev: false
title: "makeObject"
---

> **makeObject**(`opt`): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md)\>

Make an object with the base components.

## Parameters

• **opt**: [`ObjOpt`](../type-aliases/ObjOpt.md)

## Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md)\>

## Example

```js
// Good for parent objects!

const myParent = k.add(makeObject({
 pos: k.vec2(100, 100),
});

myParent.add(k.makeSprite({
 sprite: "bean",
}));

```

## Source

global.d.ts:3
