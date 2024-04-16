---
editUrl: false
next: false
prev: false
title: "makeText"
---

```ts
makeText(opt): GameObj<BaseComps & RenderComps & TextComp>
```

Make an object with a text component.
*Maker extends [makeRender](../../../../../api/functions/makerender)*

## Parameters

| Parameter | Type |
| :------ | :------ |
| `opt` | [`ObjOpt`](/api/type-aliases/objopt/) & [`RenderOpt`](/api/type-aliases/renderopt/) & [`TextOpt`](/api/type-aliases/textopt/) |

## Returns

[`GameObj`](https://kaboomjs.com/#GameObj)\<[`BaseComps`](/api/type-aliases/basecomps/) & [`RenderComps`](/api/type-aliases/rendercomps/) & `TextComp`\>

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
