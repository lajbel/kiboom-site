---
editUrl: false
next: false
prev: false
title: "makeRect"
---

> **makeRect**(`opt`): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `RectComp`\>

Make an object with a rectangle component.
*Maker extends [makeRender](../../../../../api/functions/makerender)*

## Parameters

| Parameter | Type |
| :------ | :------ |
| `opt` | [`ObjOpt`](../type-aliases/ObjOpt.md) & [`RenderOpt`](../type-aliases/RenderOpt.md) & [`RectOpt`](../type-aliases/RectOpt.md) |

## Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `RectComp`\>

## Example

```js
const rect = k.add(k.makeRect(\{
    width: 100,       // from makeRect
    height: 100,      // from makeRect
    color: "#ff00ff", // from makeRender
\}));

@group Object Makers

## Source

global.d.ts:6
