export as namespace Classcat

export interface ClassObject {
  [key: string]: boolean | any
}

export interface ClassArray extends Array<Class> {}

export type Class = string | number | ClassObject | ClassArray

export default function(names: Class): string
