---
editUrl: false
next: false
prev: false
title: "makeRender"
---

> **makeRender**(`opt`?): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md)\>

Make an object with a color and opacity components.
*Maker extends [makeObject](../../../../../api/functions/makeobject)*

Is not recommended to use this maker directly,
use the other render makers instead:

- [makeRect](../../../../../api/functions/makerect)
- [makeCircle](../../../../../api/functions/makecircle)
- [makeText](../../../../../api/functions/maketext)
- [makeSprite](../../../../../api/functions/makesprite)

## Parameters

| Parameter | Type |
| :------ | :------ |
| `opt`? | [`ObjOpt`](../type-aliases/ObjOpt.md) & [`RenderOpt`](../type-aliases/RenderOpt.md) |

## Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md)\>

## Source

global.d.ts:5
