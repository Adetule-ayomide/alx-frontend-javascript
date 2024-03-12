export default function hasValuesFromArray(setList, arr) {
  const checkarr = arr.every((item) => setList.has(item));
  return checkarr;
}
