export default function hasValuesFromArray(set, arr) {
  return arr.every((value) => set.has(value));
  /*
    JavaScript every() : Checks if every element in an array meets a condition.
    Returns true only if all elements pass the test, otherwise false
  */
}
