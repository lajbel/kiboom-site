---
editUrl: false
next: false
prev: false
title: "ApplierFN"
---

> **ApplierFN**\<`TComps`, `TOpt`\>: (`opt`, `k`) => `CompList`\<`TComps`\>

A function that applies components to a Game Object.

## Example

```js
extendMaker(
    makeBase,
    randomOpt,
    // This is the applier function
    (opt, k) => [
        sprite(opt.sprite),
    ]);
```

## Type parameters

| Type parameter |
| :------ |
| `TComps` |
| `TOpt` |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `opt` | `Required`\<`TOpt`\> |
| `k` | [`KaboomCtx`]( https://kaboomjs.com/ ) |

## Returns

`CompList`\<`TComps`\>

## Source

kiboom.d.ts:36
