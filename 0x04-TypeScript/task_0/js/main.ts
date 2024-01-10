interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const Student1: Student = {
    firstName: 'Joel',
    lastName: 'Omewah',
    age: 30,
    location: 'Lagos',
}

const Student2: Student = {
    firstName: 'Ola',
    lastName: 'Toheeb',
    age: 30,
    location: 'Lagos',
}

const studentsList: Student[] = [Student1, Student2];

document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.createElement('tbody');
    const table = document.createElement('table');
    table.appendChild(tableBody);

    const tableHeader = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const firstNameHeader = document.createElement('th');
    firstNameHeader.textContent = 'First Name';
    const locationHeader = document.createElement('th');
    locationHeader.textContent = 'Location';
    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(locationHeader);
    tableHeader.appendChild(headerRow);
    table.appendChild(tableHeader);

    document.body.appendChild(table);

    studentsList.forEach(student => {
        const row = document.createElement('tr');

        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;

        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
    });
});
