---
editUrl: false
next: false
prev: false
title: "makeArea"
---

> **makeArea**(`opt`): [`GameObj`](https://kaboomjs.com/#GameObj)\<[`BaseComps`](/api/type-aliases/basecomps/) & [`AreaComp`]( https://kaboomjs.com/#AreaComp )\>

Make an object with a collider component.
*Maker extends [makeObject](../../../../../api/functions/makeobject)*

## Parameters

| Parameter | Type |
| :------ | :------ |
| `opt` | [`ObjOpt`](/api/type-aliases/objopt/) & [`AreaOpt`](/api/type-aliases/areaopt/) |

## Returns

[`GameObj`](https://kaboomjs.com/#GameObj)\<[`BaseComps`](/api/type-aliases/basecomps/) & [`AreaComp`]( https://kaboomjs.com/#AreaComp )\>

## Example

```js
const clickableArea = k.add(makeArea({
    size: k.vec2(100, 100),
}));
```

## Source

global.d.ts:4
