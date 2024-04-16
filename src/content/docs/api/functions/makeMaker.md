---
editUrl: false
next: false
prev: false
title: "makeMaker"
---

```ts
makeMaker<TComps, TOpt>(defaultOpt, componentsApply): MakerFN<TOpt, TComps>
```

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
| `defaultOpt` | [`OptionFN`](/api/type-aliases/optionfn/)\<`TOpt`\> | The default options for the maker |
| `componentsApply` | [`ApplierFN`](/api/type-aliases/applierfn/)\<`TComps`, `TOpt`\> | - |

## Returns

[`MakerFN`](/api/type-aliases/makerfn/)\<`TOpt`, `TComps`\>

## Source

global.d.ts:11
