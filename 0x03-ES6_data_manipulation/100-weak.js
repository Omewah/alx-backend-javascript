export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let map_end = weakMap.get(endpoint) || 0;

  map_end += 1;

  weakMap.set(endpoint, map_end);

  if (map_end >= 5) {
    throw Error('Endpoint load is high');
  }

  return map_end;
}
