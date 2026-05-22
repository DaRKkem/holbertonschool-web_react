// Interfaces :
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}



// Constantes :
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'Paris',
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'London',
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');



// Affichage :
studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = tbody.insertRow();
    const cell1: HTMLTableCellElement = row.insertCell(0);
    const cell2: HTMLTableCellElement = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

table.appendChild(tbody);
document.body.appendChild(table);
