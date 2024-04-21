---
editUrl: false
next: false
prev: false
title: "SceneState"
---

A helper class to manage the state of a scene.

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Constructors

### new SceneState(name, saveData)

> **new SceneState**\<`T`\>(`name`, `saveData`?): [`SceneState`](/api/classes/scenestate/)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `saveData`? | () => `any` |

#### Returns

[`SceneState`](/api/classes/scenestate/)\<`T`\>

#### Source

kiboom.d.ts:146

## Methods

### changeScene()

> **changeScene**(`scene`, ...`args`): `void`

Change the scene to the given scene saving the current scene data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `scene` | `string` | The name of the scene to go to |
| ...`args` | `any`[] | Arguments for scene |

#### Returns

`void`

#### Source

kiboom.d.ts:164

***

### getData()

> **getData**(`key`, `defaultValue`?): `T`\[keyof `T`\]

Get the persistent data of the scene.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | keyof `T` |
| `defaultValue`? | `T`\[keyof `T`\] |

#### Returns

`T`\[keyof `T`\]

#### Source

kiboom.d.ts:152

***

### saveSceneData()

> **saveSceneData**(): `void`

Save the persistent data of the scene.

#### Returns

`void`

#### Source

kiboom.d.ts:156

***

### setBackgroundMusic()

> **setBackgroundMusic**(`music`, `options`): `void`

Sets a background music for the scene.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `music` | `string` |
| `options` | `AudioPlayOpt` |

#### Returns

`void`

#### Source

kiboom.d.ts:160

***

### setPersistentData()

> **setPersistentData**(`data`): `void`

Set the persistent data

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`void`

#### Source

kiboom.d.ts:148

## Properties

| Property | Type |
| :------ | :------ |
| `backgroundMusic` | `AudioPlay` |
| `data` | `T` |
| `name` | `string` |
| `saveData?` | () => `T` |
