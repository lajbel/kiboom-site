---
editUrl: false
next: false
prev: false
title: "extendMaker"
---

> **extendMaker**\<`TBaseComps`, `TBaseOpt`, `TNewComps`, `TNewOpt`\>(`baseMaker`, `defaultOpt`, `componentsApply`): [`MakerFN`](/api/type-aliases/makerfn/)\<`TNewOpt` & `TBaseOpt`, `TNewComps` & `TBaseComps`\>

Extend a maker with new components.

## Type parameters

| Type parameter | Description |
| :------ | :------ |
| `TBaseComps` | The base components from the base maker |
| `TBaseOpt` | The base options from the base maker |
| `TNewComps` | The new components added to the base |
| `TNewOpt` | The new options added to the base |

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseMaker` | [`MakerFN`](/api/type-aliases/makerfn/)\<`TBaseOpt`, `TBaseComps`\> | The base maker to extend. Example: makeObject |
| `defaultOpt` | [`OptionFN`](/api/type-aliases/optionfn/)\<`TNewOpt`\> \| [`OptionFN`](/api/type-aliases/optionfn/)\<`TNewOpt` & `TBaseOpt`\> | An options object created with [makeOptions](../../../../../api/functions/makeoptions) |
| `componentsApply` | [`ApplierFN`](/api/type-aliases/applierfn/)\<`TNewComps`, `TNewOpt` & `TBaseOpt`\> | - |

## Returns

[`MakerFN`](/api/type-aliases/makerfn/)\<`TNewOpt` & `TBaseOpt`, `TNewComps` & `TBaseComps`\>

A new maker with the new components and options

## Source

global.d.ts:12
