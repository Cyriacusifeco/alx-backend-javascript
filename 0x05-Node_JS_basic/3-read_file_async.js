const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

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

      Object.keys(studentGroups).forEach(field => {
        const count = studentGroups[field].length;
        const studentList = studentGroups[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${studentList}`);
      });

      resolve(); // Resolve the Promise when everything is done
    });
  });
}

module.exports = countStudents;
