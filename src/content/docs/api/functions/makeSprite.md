---
editUrl: false
next: false
prev: false
title: "makeSprite"
---

> **makeSprite**(`opt`): [`GameObj`](https://kaboomjs.com/#GameObj)\<[`BaseComps`](/api/type-aliases/basecomps/) & [`RenderComps`](/api/type-aliases/rendercomps/) & [`SpriteComp`]( https://kaboomjs.com/#SpriteComp )\>

Make an object with a sprite component.
*Maker extends [makeRender](../../../../../api/functions/makerender)*

## Parameters

| Parameter | Type |
| :------ | :------ |
| `opt` | [`ObjOpt`](/api/type-aliases/objopt/) & [`RenderOpt`](/api/type-aliases/renderopt/) & [`SpriteOpt`](/api/type-aliases/spriteopt/) |

## Returns

[`GameObj`](https://kaboomjs.com/#GameObj)\<[`BaseComps`](/api/type-aliases/basecomps/) & [`RenderComps`](/api/type-aliases/rendercomps/) & [`SpriteComp`]( https://kaboomjs.com/#SpriteComp )\>

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
