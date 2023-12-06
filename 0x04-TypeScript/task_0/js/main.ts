 // creating student interface

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// create student objects

const Student1: Student = {
  firstName: 'Stellar',
  lastName: 'Remnants',
  age: 4567,
  location: 'Milkyway',
}

const Student2: Student = {
  firstName: 'StarForming',
  lastName: 'Region',
  age: 23456,
  location: 'Orion',
}

// creating an array
let studentsList: Student[];

studentsList = [Student1, Student2];

// Function to render the table
function renderTable() {
  const tableBody = document.getElementById('tableBody');

  // Clear existing table rows
  if (tableBody instanceof HTMLTableElement) {
    tableBody.innerHTML = '';

    // Loop through the students list and create rows
    studentsList.forEach(student => {
    const row = tableBody.insertRow();

    // Create cells and add data
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    });
  } else {
    console.error('TableBody not found ');
  }
}

// Call the function to initially render the table
renderTable();
