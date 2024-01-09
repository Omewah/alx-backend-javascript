export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const view = new DataView(buffer, 0, length);
  const array = new Int8Array(buffer);
  array[position] = value;

  return view;
}
