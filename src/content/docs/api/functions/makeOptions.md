---
editUrl: false
next: false
prev: false
title: "makeOptions"
---

```ts
makeOptions<T>(opt): OptionFN<T>
```

Create a options object

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `opt` | (`k`) => `Partial`\<`T`\> |

## Returns

[`OptionFN`](/api/type-aliases/optionfn/)\<`T`\>

## Example

```js
const myOptions = k.makeOptions(k => (\{
   pos: k.vec2(100, 100),
   scale: 2,
\}));

const myObj = k.extendMaker(k.makeObject, myOptions, (comps, opt) => (\{
    // ...
\});

## Source

global.d.ts:16
