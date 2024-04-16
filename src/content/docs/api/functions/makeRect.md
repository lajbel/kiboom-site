---
editUrl: false
next: false
prev: false
title: "makeRect"
---

> **makeRect**(`opt`): [`GameObj`](https://kaboomjs.com/#GameObj)\<[`BaseComps`](/api/type-aliases/basecomps/) & [`RenderComps`](/api/type-aliases/rendercomps/) & `RectComp`\>

Make an object with a rectangle component.
*Maker extends [makeRender](../../../../../api/functions/makerender)*

## Parameters

| Parameter | Type |
| :------ | :------ |
| `opt` | [`ObjOpt`](/api/type-aliases/objopt/) & [`RenderOpt`](/api/type-aliases/renderopt/) & [`RectOpt`](/api/type-aliases/rectopt/) |

## Returns

[`GameObj`](https://kaboomjs.com/#GameObj)\<[`BaseComps`](/api/type-aliases/basecomps/) & [`RenderComps`](/api/type-aliases/rendercomps/) & `RectComp`\>

## Example

```js
const rect = k.add(k.makeRect(\{
    size: k.vec2(50, 50)  // from makeRect
    color: "#ff00ff",     // from makeRender
\}));

@group Object Makers

## Source

global.d.ts:6
