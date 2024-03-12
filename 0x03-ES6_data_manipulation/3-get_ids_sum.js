export default function getStudentIdsSum(arr) {
  const sumId = arr.reduce(((acc, cur) => acc + cur.id), 0);
  return sumId;
}
