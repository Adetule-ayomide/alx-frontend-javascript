export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) return [];
  const studentId = arr.map((item) => item.id);
  return studentId;
}
