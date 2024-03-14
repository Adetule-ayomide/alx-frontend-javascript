interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: "Herry",
  lastName: "job",
  age: 20,
  location: "zaria"
};

const studentTwo: Student = {
  firstName: "Precious",
  lastName: "zoe",
  age: 22,
  location: "kano"
};
const studentsList: Student[] = [studentOne, studentTwo];
const studentTable: string[] = [];

for(const student of studentsList){
  const row = `${student.firstName} ${student.location}`;
  studentTable.push(row);
}
console.log(studentTable);
