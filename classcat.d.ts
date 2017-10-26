export as namespace classcat

export interface ClassSet {
  [key: string]: boolean | any | ClassSet
}

export type Class = string | number | ClassSet

/**
 * Join all elements of an array or keys of an object into a string.
 * If the value associated with a given key is falsy, the key will
 * be ignored
 *
 * @param classes
*/
export default function(classes: Class | Class[]): string
