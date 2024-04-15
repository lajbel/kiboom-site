---
editUrl: false
next: false
prev: false
title: "makeSprite"
---

> **makeSprite**(`opt`): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `SpriteComp`\>

Make an object with a sprite component.
*Maker extends [makeRender](../../../../../api/functions/makerender)*

## Parameters

| Parameter | Type |
| :------ | :------ |
| `opt` | [`ObjOpt`](../type-aliases/ObjOpt.md) & [`RenderOpt`](../type-aliases/RenderOpt.md) & [`SpriteOpt`](../type-aliases/SpriteOpt.md) |

## Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `SpriteComp`\>

## Example

```js
const sprite = k.add(k.makeSprite(\{
    sprite: "bean",        // from makeSprite
    scale: 2,              // from makeRender
    pos: k.vec2(100, 100), // from makeObject
\}));

@group Object Makers

## Source

global.d.ts:9
