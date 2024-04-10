export default function iterateThroughObject(reportWithIterator) {
  return [...reportWithIterator].join(' | ');
  // join returns a string
}
