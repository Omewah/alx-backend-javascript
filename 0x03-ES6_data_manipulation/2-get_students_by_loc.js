export default function getListStudents() {
  return [
    {
      id: 1,
      firstName: 'Guillaume',
      location: 'San Francisco',
    },
    {
      id: 2,
      firstName: 'James',
      location: 'Columbia',
    },
    {
      id: 5,
      firstName: 'Serena',
      location: 'San Francisco',
    },
  ];
}

export function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
