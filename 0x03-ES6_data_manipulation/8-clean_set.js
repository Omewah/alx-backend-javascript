export default function cleanSet(set, startString) {
  let output;
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  output = Array.from(set).filter((word) => typeof word === 'string' && word.startsWith(startString));
  output = output.map((word) => word.slice(startString.length));

  return output.join('-');
}
