---
editUrl: false
next: false
prev: false
title: "SceneState"
---

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Constructors

### new SceneState(name, saveData)

```ts
new SceneState<T>(name, saveData?): SceneState<T>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `saveData`? | () => `any` |

#### Returns

[`SceneState`](/api/classes/scenestate/)\<`T`\>

#### Source

kiboom.d.ts:143

## Methods

### changeScene()

```ts
changeScene(scene, ...args): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `scene` | `string` |
| ...`args` | `any`[] |

#### Returns

`void`

#### Source

kiboom.d.ts:148

***

### getData()

```ts
getData(key, defaultValue?): T[keyof T]
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | keyof `T` |
| `defaultValue`? | `T`\[keyof `T`\] |

#### Returns

`T`\[keyof `T`\]

#### Source

kiboom.d.ts:145

***

### saveSceneData()

```ts
saveSceneData(): void
```

#### Returns

`void`

#### Source

kiboom.d.ts:146

***

### setBackgroundMusic()

```ts
setBackgroundMusic(music, options): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `music` | `string` |
| `options` | `AudioPlayOpt` |

#### Returns

`void`

#### Source

kiboom.d.ts:147

***

### setPersistentData()

```ts
setPersistentData(data): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`void`

#### Source

kiboom.d.ts:144

## Properties

| Property | Type |
| :------ | :------ |
| `backgroundMusic` | `AudioPlay` |
| `data` | `T` |
| `name` | `string` |
| `saveData?` | () => `T` |
