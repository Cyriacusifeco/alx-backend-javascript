const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== ''); // Remove empty lines
    const fields = lines[0].split(',');

    const students = lines.slice(1).map(line => line.split(','));

    const studentGroups = {}; // To store students grouped by field

    students.forEach(student => {
      const field = student[3]; // Assuming field is the 4th element (0-indexed)
      const name = student[0]; // Assuming first name is the 1st element (0-indexed)

      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      studentGroups[field].push(name);
    });

    console.log(`Number of students: ${students.length}`);

    Object.keys(studentGroups).forEach(field => {
      const count = studentGroups[field].length;
      const studentList = studentGroups[field].join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${studentList}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
