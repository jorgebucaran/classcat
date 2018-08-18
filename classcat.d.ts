export as namespace Classcat

export interface ClassObject {
  [key: string]: boolean | any
}

export interface ClassArray extends Array<Class> {}

export type Class = string | number | ClassObject | ClassArray

/**
 * Classcat is a unary function expecting an array of elements _or_ an object of key/value pairs and returns a string that is the result of joining all the elements in the array or object keys.
 *
 * [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) array elements and object properties will be ignored.
 *
 * @param classNames
 */
export default function(classNames: Class): string
