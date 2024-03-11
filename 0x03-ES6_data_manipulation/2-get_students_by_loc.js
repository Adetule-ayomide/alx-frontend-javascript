export default function getStudentsByLocation(arr, city) {
  const studentLocation = arr.filter((item) => item.location === city);
  return studentLocation;
}
