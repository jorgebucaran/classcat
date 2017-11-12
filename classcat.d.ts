export as namespace classcat

export interface ClassSet {
  [key: string]: boolean | any | ClassSet
}

export type Class = string | number | ClassSet

/**
 * Classcat is a unary function (accepts a single argument) expecting an array of elements or an object of keys and returns a string that is the result of joining all elements of the array or object keys.
 *
 * If the value associated with a given key is falsey, the key will be ignored.
 *
 * @param classes
*/
export default function(classes: Class | Class[]): string
