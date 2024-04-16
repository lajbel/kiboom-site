---
editUrl: false
next: false
prev: false
title: "makeCircle"
---

> **makeCircle**(`opt`): [`GameObj`](https://kaboomjs.com/#GameObj)\<[`BaseComps`](/api/type-aliases/basecomps/) & [`RenderComps`](/api/type-aliases/rendercomps/)\>

Make an object with a circle component.
*Maker extends [makeRender](../../../../../api/functions/makerender)*

## Parameters

| Parameter | Type |
| :------ | :------ |
| `opt` | [`ObjOpt`](/api/type-aliases/objopt/) & [`RenderOpt`](/api/type-aliases/renderopt/) & [`CircleOpt`](/api/type-aliases/circleopt/) |

## Returns

[`GameObj`](https://kaboomjs.com/#GameObj)\<[`BaseComps`](/api/type-aliases/basecomps/) & [`RenderComps`](/api/type-aliases/rendercomps/)\>

## Example

```js
const circle = k.add(k.makeCircle(\{
    radius: 50,       // from makeCircle
    color: "#ff00ff", // from makeRender
\}));

@group Object Makers

## Source

global.d.ts:7
