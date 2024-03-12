export default function updateStudentGradeByCity(arr, city, newGrades) {
  const updateList = arr.filter((student) => student.location === city).map((item) => {
    const newGrade = newGrades.find((grade) => item.id === grade.studentId); return newGrade ? { ...item, grade: newGrade.grade } : { ...item, grade: 'N/A' };
  });
  return updateList;
}
