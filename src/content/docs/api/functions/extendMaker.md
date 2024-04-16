---
editUrl: false
next: false
prev: false
title: "extendMaker"
---

```ts
extendMaker<TBaseComps, TBaseOpt, TNewComps, TNewOpt>(
   baseMaker, 
   defaultOpt, 
componentsApply): MakerFN<TNewOpt & TBaseOpt, TNewComps & TBaseComps>
```

Extend a maker with new components.

## Type parameters

| Type parameter |
| :------ |
| `TBaseComps` |
| `TBaseOpt` |
| `TNewComps` |
| `TNewOpt` |

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseMaker` | [`MakerFN`](/api/type-aliases/makerfn/)\<`TBaseOpt`, `TBaseComps`\> | The base maker to extend. Example: makeObject |
| `defaultOpt` | [`OptionFN`](/api/type-aliases/optionfn/)\<`TNewOpt`\> \| [`OptionFN`](/api/type-aliases/optionfn/)\<`TNewOpt` & `TBaseOpt`\> | An options object created with [makeOptions](../../../../../api/functions/makeoptions) |
| `componentsApply` | [`ApplierFN`](/api/type-aliases/applierfn/)\<`TNewComps`, `TNewOpt` & `TBaseOpt`\> | - |

## Returns

[`MakerFN`](/api/type-aliases/makerfn/)\<`TNewOpt` & `TBaseOpt`, `TNewComps` & `TBaseComps`\>

## Source

global.d.ts:12
