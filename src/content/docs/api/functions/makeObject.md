---
editUrl: false
next: false
prev: false
title: "makeObject"
---

> **makeObject**(`opt`): [`GameObj`](https://kaboomjs.com/#GameObj)\<[`BaseComps`](/api/type-aliases/basecomps/)\>

Make an object with the base components.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `opt` | [`ObjOpt`](/api/type-aliases/objopt/) |

## Returns

[`GameObj`](https://kaboomjs.com/#GameObj)\<[`BaseComps`](/api/type-aliases/basecomps/)\>

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
