export as namespace classwrap

export interface ClassSet {
  [key: string]: boolean | any | ClassSet
}

export type Class = string | number | ClassSet

/**
 * Joins all elements of an array or keys of an object into a string.
 *
 * @param classes
*/
export default function wrap(classes: Class | Class[]): string
