---
editUrl: false
next: false
prev: false
title: "makeText"
---

> **makeText**(`opt`): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `TextComp`\>

Make an object with a text component.
*Maker extends [makeRender](../../../../../api/functions/makerender)*

## Parameters

| Parameter | Type |
| :------ | :------ |
| `opt` | [`ObjOpt`](../type-aliases/ObjOpt.md) & [`RenderOpt`](../type-aliases/RenderOpt.md) & [`TextOpt`](../type-aliases/TextOpt.md) |

## Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `TextComp`\>

## Example

```js
const text = k.add(k.makeText(\{
    text: "Hello, world!", // from makeText
    size: 24,              // from makeText
    opacity: 0,            // from makeRender
\}));

@group Object Makers

## Source

global.d.ts:8
