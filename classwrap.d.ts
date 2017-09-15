export as namespace classwrap

export interface ClassSet {
  [key: string]: boolean | any | ClassSet
}

export type Class = string | number | ClassSet

/**
 * Joins all elements of an array or keys of an object into a string.
 * If the value associated with a given key is falsy, the key will be ignored.
 * Nested arrays or objects are supported too. Use this feature to assemble
 * classes with a common prefix.
 *
 * @param classes
*/
export default function wrap(classes: Class | Class[]): string
