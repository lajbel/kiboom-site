---
editUrl: false
next: false
prev: false
title: "makeCircle"
---

> **makeCircle**(`opt`): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md)\>

Make an object with a circle component.
*Maker extends [makeRender](../../../../../api/functions/makerender)*

## Parameters

| Parameter | Type |
| :------ | :------ |
| `opt` | [`ObjOpt`](../type-aliases/ObjOpt.md) & [`RenderOpt`](../type-aliases/RenderOpt.md) & [`CircleOpt`](../type-aliases/CircleOpt.md) |

## Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md)\>

## Example

```js
const circle = k.add(k.makeCircle(\{
    radius: 50,       // from makeCircle
    color: "#ff00ff", // from makeRender
\}));

@group Object Makers

## Source

global.d.ts:7
