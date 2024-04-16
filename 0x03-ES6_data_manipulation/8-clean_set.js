export default function cleanSet(set, startString) {
  if (!startString || !set || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  return [...set]
    .filter((item) => typeof item === 'string' && item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .join('-');
}
