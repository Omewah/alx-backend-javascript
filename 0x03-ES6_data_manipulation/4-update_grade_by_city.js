export default function updateStudentGradeByCity(students, city, newGrades) {
  const gradeMap = {};
  newGrades.forEach((gradeObj) => {
    gradeMap[gradeObj.studentId] = gradeObj.grade;
  });

  return students
    .filter((students) => students.location === city)
    .map((student) => {
      const grade = gradeMap[student.id] || 'N/A';
      return { ...student, grade };
    });
}
