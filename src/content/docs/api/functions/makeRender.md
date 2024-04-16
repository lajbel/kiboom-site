---
editUrl: false
next: false
prev: false
title: "makeRender"
---

```ts
makeRender(opt?): GameObj<BaseComps & RenderComps>
```

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
| `opt`? | [`ObjOpt`](/api/type-aliases/objopt/) & [`RenderOpt`](/api/type-aliases/renderopt/) |

## Returns

[`GameObj`](https://kaboomjs.com/#GameObj)\<[`BaseComps`](/api/type-aliases/basecomps/) & [`RenderComps`](/api/type-aliases/rendercomps/)\>

## Source

global.d.ts:5
