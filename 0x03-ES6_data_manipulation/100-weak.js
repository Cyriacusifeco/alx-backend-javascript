/* eslint-disable import/prefer-default-export */
export const weakMap = new WeakMap();
let count = 1;
export function queryAPI(endpoint) {
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, count);
  count += 1;
}
