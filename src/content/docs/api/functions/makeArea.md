---
editUrl: false
next: false
prev: false
title: "makeArea"
---

> **makeArea**(`opt`): `GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & `AreaComp`\>

Make an object with a collider component.
*Maker extends [makeObject](../../../../../api/functions/makeobject)*

## Parameters

• **opt**: [`ObjOpt`](../type-aliases/ObjOpt.md) & [`AreaOpt`](../type-aliases/AreaOpt.md)

## Returns

`GameObj`\<[`BaseComps`](../type-aliases/BaseComps.md) & `AreaComp`\>

## Example

```js
const clickableArea = k.add(makeArea({
  width: 100,
  height: 100,
}));
```

## Source

global.d.ts:4