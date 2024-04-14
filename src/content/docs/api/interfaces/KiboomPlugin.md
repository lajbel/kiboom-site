---
editUrl: false
next: false
prev: false
title: "KiboomPlugin"
---

The kiboom Kaboom's plugin

## Object Makers

### Object Makers

#### makeArea()

> **makeArea**(`opt`): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & `AreaComp`\>

Make an object with a collider component.
*Maker extends [makeObject](../../../../../api/functions/makeobject)*

##### Parameters

• **opt**: [`ObjOpt`](../type-aliases/ObjOpt.md) & [`AreaOpt`](../type-aliases/AreaOpt.md)

##### Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & `AreaComp`\>

##### Example

```js
const clickableArea = k.add(makeArea({
  width: 100,
  height: 100,
}));
```

##### Source

kiboom.d.ts:151

***

#### makeBg()

> **makeBg**(`opt`?): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `RectComp`\>

Make a background object.
*Maker extends [makeRender](../../../../../api/functions/makerender)*

##### Parameters

• **opt?**: [`ObjOpt`](../type-aliases/ObjOpt.md) & [`RenderOpt`](../type-aliases/RenderOpt.md) & [`BackgroundOpt`](../type-aliases/BackgroundOpt.md)

##### Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `RectComp`\>

##### Source

kiboom.d.ts:207

***

#### makeCircle()

> **makeCircle**(`opt`): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md)\>

Make an object with a circle component.
*Maker extends [makeRender](../../../../../api/functions/makerender)*

##### Parameters

• **opt**: [`ObjOpt`](../type-aliases/ObjOpt.md) & [`RenderOpt`](../type-aliases/RenderOpt.md) & [`CircleOpt`](../type-aliases/CircleOpt.md)

##### Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md)\>

##### Source

kiboom.d.ts:183

***

#### makeObject()

> **makeObject**(`opt`): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md)\>

Make an object with the base components.

##### Parameters

• **opt**: [`ObjOpt`](../type-aliases/ObjOpt.md)

##### Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md)\>

##### Example

```js
// Good for parent objects!

const myParent = k.add(makeObject({
 pos: k.vec2(100, 100),
});

myParent.add(k.makeSprite({
 sprite: "bean",
}));

```

##### Source

kiboom.d.ts:135

***

#### makeRect()

> **makeRect**(`opt`): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `RectComp`\>

Make an object with a rectangle component.
*Maker extends [makeRender](../../../../../api/functions/makerender)*

##### Parameters

• **opt**: [`ObjOpt`](../type-aliases/ObjOpt.md) & [`RenderOpt`](../type-aliases/RenderOpt.md) & [`RectOpt`](../type-aliases/RectOpt.md)

##### Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `RectComp`\>

##### Source

kiboom.d.ts:175

***

#### makeRender()

> **makeRender**(`opt`?): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md)\>

Make an object with a color and opacity components.
*Maker extends [makeObject](../../../../../api/functions/makeobject)*

Is not recommended to use this maker directly,
use the other render makers instead:

- [makeRect](../../../../../api/functions/makerect)
- [makeCircle](../../../../../api/functions/makecircle)
- [makeText](../../../../../api/functions/maketext)
- [makeSprite](../../../../../api/functions/makesprite)

##### Parameters

• **opt?**: [`ObjOpt`](../type-aliases/ObjOpt.md) & [`RenderOpt`](../type-aliases/RenderOpt.md)

##### Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md)\>

##### Source

kiboom.d.ts:167

***

#### makeSprite()

> **makeSprite**(`opt`): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `SpriteComp`\>

Make an object with a sprite component.
*Maker extends [makeRender](../../../../../api/functions/makerender)*

##### Parameters

• **opt**: [`ObjOpt`](../type-aliases/ObjOpt.md) & [`RenderOpt`](../type-aliases/RenderOpt.md) & [`SpriteOpt`](../type-aliases/SpriteOpt.md)

##### Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `SpriteComp`\>

##### Source

kiboom.d.ts:199

***

#### makeText()

> **makeText**(`opt`): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `TextComp`\>

Make an object with a text component.
*Maker extends [makeRender](../../../../../api/functions/makerender)*

##### Parameters

• **opt**: [`ObjOpt`](../type-aliases/ObjOpt.md) & [`RenderOpt`](../type-aliases/RenderOpt.md) & [`TextOpt`](../type-aliases/TextOpt.md)

##### Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `TextComp`\>

##### Source

kiboom.d.ts:191

## Base

### Base

#### extendMaker()

> **extendMaker**\<`TBaseComps`, `TBaseOpt`, `TNewComps`, `TNewOpt`\>(`baseMaker`, `defaultOpt`, `componentsApply`, `baseDefaultOpt`?): [`MakerFN`](../type-aliases/MakerFN.md)\<`TNewOpt` & `TBaseOpt`, `TNewComps` & `TBaseComps`\>

Extend a maker with new components.

##### Type parameters

• **TBaseComps**

• **TBaseOpt**

• **TNewComps**

• **TNewOpt**

##### Parameters

• **baseMaker**: [`MakerFN`](../type-aliases/MakerFN.md)\<`TBaseOpt`, `TBaseComps`\>

• **defaultOpt**: [`OptionFN`](../type-aliases/OptionFN.md)\<`TNewOpt`\>

• **componentsApply**: [`ApplierFN`](../type-aliases/ApplierFN.md)\<`TNewComps`, `TNewOpt` & `TBaseOpt`\>

• **baseDefaultOpt?**: [`OptionalOptionFN`](../type-aliases/OptionalOptionFN.md)\<`TBaseOpt`\>

##### Returns

[`MakerFN`](../type-aliases/MakerFN.md)\<`TNewOpt` & `TBaseOpt`, `TNewComps` & `TBaseComps`\>

##### Source

kiboom.d.ts:225

***

#### makeMaker()

> **makeMaker**\<`TComps`, `TOpt`\>(`defaultOpt`, `componentsApply`): [`MakerFN`](../type-aliases/MakerFN.md)\<`TOpt`, `TComps`\>

Make an object maker. This is used internally for [makeObject](../../../../../api/functions/makeobject),
but we recommend using [extendMaker](../../../../../api/functions/extendmaker) instead if you want to
mantain the base options.

##### Type parameters

• **TComps**

• **TOpt**

##### Parameters

• **defaultOpt**: [`OptionFN`](../type-aliases/OptionFN.md)\<`TOpt`\>

The default options for the maker

• **componentsApply**: [`ApplierFN`](../type-aliases/ApplierFN.md)\<`TComps`, `TOpt`\>

##### Returns

[`MakerFN`](../type-aliases/MakerFN.md)\<`TOpt`, `TComps`\>

##### Source

kiboom.d.ts:216
