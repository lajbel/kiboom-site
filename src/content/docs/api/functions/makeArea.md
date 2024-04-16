---
editUrl: false
next: false
prev: false
title: "makeArea"
---

```ts
makeArea(opt): GameObj<BaseComps & AreaComp>
```

Make an object with a collider component.
*Maker extends [makeObject](../../../../../api/functions/makeobject)*

## Parameters

| Parameter | Type |
| :------ | :------ |
| `opt` | [`ObjOpt`](/api/type-aliases/objopt/) & [`AreaOpt`](/api/type-aliases/areaopt/) |

## Returns

[`GameObj`](https://kaboomjs.com/#GameObj)\<[`BaseComps`](/api/type-aliases/basecomps/) & `AreaComp`\>

## Example

```js
const clickableArea = k.add(makeArea({
    size: k.vec2(100, 100),
}));
```

## Source

global.d.ts:4
