---
editUrl: false
next: false
prev: false
title: "MakerFN"
---

```ts
type MakerFN<TOpt, TComps>: (opt) => GameObj<TComps>;
```

A function that creates a Game Object.

## Example

```js
makeArea();
```

## Type parameters

| Type parameter | Description |
| :------ | :------ |
| `TOpt` | The options to create the object. |
| `TComps` | The components that the object will have. |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `opt` | `TOpt` |

## Returns

[`GameObj`](https://kaboomjs.com/#GameObj)\<`TComps`\>

## Source

kiboom.d.ts:19
