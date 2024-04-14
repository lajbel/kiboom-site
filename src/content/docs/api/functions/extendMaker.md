---
editUrl: false
next: false
prev: false
title: "extendMaker"
---

> **extendMaker**\<`TBaseComps`, `TBaseOpt`, `TNewComps`, `TNewOpt`\>(`baseMaker`, `defaultOpt`, `componentsApply`, `baseDefaultOpt`?): [`MakerFN`](../type-aliases/MakerFN.md)\<`TNewOpt` & `TBaseOpt`, `TNewComps` & `TBaseComps`\>

Extend a maker with new components.

## Type parameters

• **TBaseComps**

• **TBaseOpt**

• **TNewComps**

• **TNewOpt**

## Parameters

• **baseMaker**: [`MakerFN`](../type-aliases/MakerFN.md)\<`TBaseOpt`, `TBaseComps`\>

• **defaultOpt**: [`OptionFN`](../type-aliases/OptionFN.md)\<`TNewOpt`\>

• **componentsApply**: [`ApplierFN`](../type-aliases/ApplierFN.md)\<`TNewComps`, `TNewOpt` & `TBaseOpt`\>

• **baseDefaultOpt?**: [`OptionalOptionFN`](../type-aliases/OptionalOptionFN.md)\<`TBaseOpt`\>

## Returns

[`MakerFN`](../type-aliases/MakerFN.md)\<`TNewOpt` & `TBaseOpt`, `TNewComps` & `TBaseComps`\>

## Source

global.d.ts:12
