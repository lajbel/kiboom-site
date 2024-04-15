---
editUrl: false
next: false
prev: false
title: "makeMaker"
---

> **makeMaker**\<`TComps`, `TOpt`\>(`defaultOpt`, `componentsApply`): [`MakerFN`](../type-aliases/MakerFN.md)\<`TOpt`, `TComps`\>

Make an object maker. This is used internally for [makeObject](../../../../../api/functions/makeobject),
but we recommend using [extendMaker](../../../../../api/functions/extendmaker) instead if you want to
mantain the base options.

## Type parameters

| Type parameter |
| :------ |
| `TComps` |
| `TOpt` |

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `defaultOpt` | [`OptionFN`](../type-aliases/OptionFN.md)\<`TOpt`\> | The default options for the maker |
| `componentsApply` | [`ApplierFN`](../type-aliases/ApplierFN.md)\<`TComps`, `TOpt`\> | - |

## Returns

[`MakerFN`](../type-aliases/MakerFN.md)\<`TOpt`, `TComps`\>

## Source

global.d.ts:11
