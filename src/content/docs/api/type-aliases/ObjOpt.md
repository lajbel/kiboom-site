---
editUrl: false
next: false
prev: false
title: "ObjOpt"
---

```ts
type ObjOpt: {
  anchor: Anchor | Vec2;
  pos: Vec2;
  rotate: number;
  tags: string[];
  z: number;
};
```

The base options of all object makers

## Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `anchor` | [`Anchor`]( https://kaboomjs.com/#Anchor ) \| [`Vec2`]( https://kaboomjs.com/#Vec2 ) | Anchor point of the object |
| `pos` | [`Vec2`]( https://kaboomjs.com/#Vec2 ) | Position of the object |
| `rotate` | `number` | The rotation of the object |
| `tags` | `string`[] | Tags of the object |
| `z` | `number` | The z index of the object |

## Source

kiboom.d.ts:46
