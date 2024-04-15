---
editUrl: false
next: false
prev: false
title: "KiboomPlugin"
---

The kiboom Kaboom's plugin

## Object Makers

### Object Makers

#### makeBg()

> **makeBg**(`opt`?): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `RectComp`\>

Make a color background object.
*Maker extends [makeRender](../../../../../api/functions/makerender)*

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `opt`? | [`ObjOpt`](../type-aliases/ObjOpt.md) & [`RenderOpt`](../type-aliases/RenderOpt.md) & [`BackgroundOpt`](../type-aliases/BackgroundOpt.md) |

##### Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `RectComp`\>

##### Source

kiboom.d.ts:242

### Other

#### makeArea()

> **makeArea**(`opt`): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & `AreaComp`\>

Make an object with a collider component.
*Maker extends [makeObject](../../../../../api/functions/makeobject)*

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `opt` | [`ObjOpt`](../type-aliases/ObjOpt.md) & [`AreaOpt`](../type-aliases/AreaOpt.md) |

##### Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & `AreaComp`\>

##### Example

```js
const clickableArea = k.add(makeArea({
    size: k.vec2(100, 100),
}));
```

##### Source

kiboom.d.ts:160

***

#### makeObject()

> **makeObject**(`opt`): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md)\>

Make an object with the base components.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `opt` | [`ObjOpt`](../type-aliases/ObjOpt.md) |

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

kiboom.d.ts:146

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

| Parameter | Type |
| :------ | :------ |
| `opt`? | [`ObjOpt`](../type-aliases/ObjOpt.md) & [`RenderOpt`](../type-aliases/RenderOpt.md) |

##### Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md)\>

##### Source

kiboom.d.ts:175

## Methods

### children()

> **children**(`childrens`): `EmptyComp`

A component for define a childrens

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `childrens` | [`ChildrenDefinition`](../type-aliases/ChildrenDefinition.md)\<`Comp`[]\> |

#### Returns

`EmptyComp`

#### Source

kiboom.d.ts:274

***

### custom()

> **custom**\<`T`\>(`custom`): `Comp` & `T`

A component for define a custom component

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `custom` | () => `T` |

#### Returns

`Comp` & `T`

#### Source

kiboom.d.ts:270

***

### kiScene()

`Alpha`

> **kiScene**\<`T`\>(`name`, `def`): () => `void`

Create an scene with an SceneManager

 In development

:::caution[Alpha]
This API should not be used in production and may be trimmed from a public release.
:::

#### Type parameters

| Type parameter |
| :------ |
| `T` extends `Object` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `def` | (`sceneData`, ...`args`) => `void` |

#### Returns

`Function`

> ##### Returns
>
> `void`
>

:::caution[Alpha]
This API should not be used in production and may be trimmed from a public release.
:::

#### Source

kiboom.d.ts:266

***

### makeCircle()

> **makeCircle**(`opt`): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md)\>

Make an object with a circle component.
*Maker extends [makeRender](../../../../../api/functions/makerender)*

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `opt` | [`ObjOpt`](../type-aliases/ObjOpt.md) & [`RenderOpt`](../type-aliases/RenderOpt.md) & [`CircleOpt`](../type-aliases/CircleOpt.md) |

#### Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md)\>

#### Example

```js
const circle = k.add(k.makeCircle(\{
    radius: 50,       // from makeCircle
    color: "#ff00ff", // from makeRender
\}));

@group Object Makers

#### Source

kiboom.d.ts:204

***

### makeOptions()

> **makeOptions**\<`T`\>(`opt`): [`OptionFN`](../type-aliases/OptionFN.md)\<`T`\>

Create a options object

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `opt` | (`k`) => `Partial`\<`T`\> |

#### Returns

[`OptionFN`](../type-aliases/OptionFN.md)\<`T`\>

#### Source

kiboom.d.ts:278

***

### makeRect()

> **makeRect**(`opt`): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `RectComp`\>

Make an object with a rectangle component.
*Maker extends [makeRender](../../../../../api/functions/makerender)*

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `opt` | [`ObjOpt`](../type-aliases/ObjOpt.md) & [`RenderOpt`](../type-aliases/RenderOpt.md) & [`RectOpt`](../type-aliases/RectOpt.md) |

#### Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `RectComp`\>

#### Example

```js
const rect = k.add(k.makeRect(\{
    width: 100,       // from makeRect
    height: 100,      // from makeRect
    color: "#ff00ff", // from makeRender
\}));

@group Object Makers

#### Source

kiboom.d.ts:190

***

### makeSprite()

> **makeSprite**(`opt`): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `SpriteComp`\>

Make an object with a sprite component.
*Maker extends [makeRender](../../../../../api/functions/makerender)*

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `opt` | [`ObjOpt`](../type-aliases/ObjOpt.md) & [`RenderOpt`](../type-aliases/RenderOpt.md) & [`SpriteOpt`](../type-aliases/SpriteOpt.md) |

#### Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `SpriteComp`\>

#### Example

```js
const sprite = k.add(k.makeSprite(\{
    sprite: "bean",        // from makeSprite
    scale: 2,              // from makeRender
    pos: k.vec2(100, 100), // from makeObject
\}));

@group Object Makers

#### Source

kiboom.d.ts:234

***

### makeText()

> **makeText**(`opt`): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `TextComp`\>

Make an object with a text component.
*Maker extends [makeRender](../../../../../api/functions/makerender)*

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `opt` | [`ObjOpt`](../type-aliases/ObjOpt.md) & [`RenderOpt`](../type-aliases/RenderOpt.md) & [`TextOpt`](../type-aliases/TextOpt.md) |

#### Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & [`RenderComps`](../type-aliases/RenderComps.md) & `TextComp`\>

#### Example

```js
const text = k.add(k.makeText(\{
    text: "Hello, world!", // from makeText
    size: 24,              // from makeText
    opacity: 0,            // from makeRender
\}));

@group Object Makers

#### Source

kiboom.d.ts:219

## Base

### Base

#### extendMaker()

> **extendMaker**\<`TBaseComps`, `TBaseOpt`, `TNewComps`, `TNewOpt`\>(`baseMaker`, `defaultOpt`, `componentsApply`, `baseDefaultOpt`?): [`MakerFN`](../type-aliases/MakerFN.md)\<`TNewOpt` & `TBaseOpt`, `TNewComps` & `TBaseComps`\>

Extend a maker with new components.

##### Type parameters

| Type parameter |
| :------ |
| `TBaseComps` |
| `TBaseOpt` |
| `TNewComps` |
| `TNewOpt` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseMaker` | [`MakerFN`](../type-aliases/MakerFN.md)\<`TBaseOpt`, `TBaseComps`\> |
| `defaultOpt` | [`OptionFN`](../type-aliases/OptionFN.md)\<`TNewOpt`\> |
| `componentsApply` | [`ApplierFN`](../type-aliases/ApplierFN.md)\<`TNewComps`, `TNewOpt` & `TBaseOpt`\> |
| `baseDefaultOpt`? | [`OptionalOptionFN`](../type-aliases/OptionalOptionFN.md)\<`TBaseOpt`\> |

##### Returns

[`MakerFN`](../type-aliases/MakerFN.md)\<`TNewOpt` & `TBaseOpt`, `TNewComps` & `TBaseComps`\>

##### Source

kiboom.d.ts:260

***

#### makeMaker()

> **makeMaker**\<`TComps`, `TOpt`\>(`defaultOpt`, `componentsApply`): [`MakerFN`](../type-aliases/MakerFN.md)\<`TOpt`, `TComps`\>

Make an object maker. This is used internally for [makeObject](../../../../../api/functions/makeobject),
but we recommend using [extendMaker](../../../../../api/functions/extendmaker) instead if you want to
mantain the base options.

##### Type parameters

| Type parameter |
| :------ |
| `TComps` |
| `TOpt` |

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `defaultOpt` | [`OptionFN`](../type-aliases/OptionFN.md)\<`TOpt`\> | The default options for the maker |
| `componentsApply` | [`ApplierFN`](../type-aliases/ApplierFN.md)\<`TComps`, `TOpt`\> | - |

##### Returns

[`MakerFN`](../type-aliases/MakerFN.md)\<`TOpt`, `TComps`\>

##### Source

kiboom.d.ts:251
