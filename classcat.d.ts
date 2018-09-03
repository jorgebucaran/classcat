export as namespace Classcat

export interface ClassObject {
  [key: string]: boolean | any
}

export interface ClassArray extends Array<Class> {}

export type Class = string | number | ClassObject | ClassArray

/**
 * A number, string, object or array. Objects consist of className/value pairs. Arrays are recursively reduced, therefore elements can be of any type aforementioned. [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) values are added to the output, [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) values are ignored.
 *
 * @param names
 */
export default function(names: Class): string
