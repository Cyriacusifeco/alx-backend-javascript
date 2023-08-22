const path = require('path');
const fs = require('fs').promises;

async function countStudents(path) {
  if (!path) {
    // Use a default database path if no path is provided
    path = path.join(__dirname, 'database.csv'); // Update the default path as needed
  }

  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const fields = lines[0].split(',');

    const students = lines.slice(1).map(line => line.split(','));
    const studentCount = students.length;

      console.log(`Number of students: ${studentCount}`);

    const studentGroups = {};

    students.forEach(student => {
      const field = student[3]; // Assuming field is the 4th element (0-indexed)
      const name = student[0]; // Assuming first name is the 1st element (0-indexed)

      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      studentGroups[field].push(name);
    });

    let formattedInfo = `Number of students: ${studentCount}\n`;

    Object.keys(studentGroups).forEach(field => {
      const count = studentGroups[field].length;
      const studentList = studentGroups[field].join(', ');
	    console.log(`Number of students in ${field}: ${count}. List: ${studentList}`);
      formattedInfo += `Number of students in ${field}: ${count}. List: ${studentList}\n`;
    });

    return formattedInfo; // Return the formatted student information as a string
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
