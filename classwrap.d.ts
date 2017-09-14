
export as namespace classwrap

export interface ClassSet {
  [key: string]: boolean | any | ClassSet
}

export type Class = string | number | ClassSet

export default function (classes: Class | Class[])