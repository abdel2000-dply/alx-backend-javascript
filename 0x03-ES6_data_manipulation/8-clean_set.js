export default function cleanSet(set, startString) {
  if (!startString || !set.size === 0 || typeof startString !== 'string') {
    return '';
  }

  return [...set]
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .join('-');
}
