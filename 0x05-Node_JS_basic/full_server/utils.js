const fs = require('fs').promises;

function readDatabase(filePath) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      const lines = data.split('\n').filter(line => line.trim() !== '');

      const fields = lines[0].split(',');
      const students = lines.slice(1).map(line => line.split(','));

      const studentsByField = {};

      students.forEach(student => {
        const firstName = student[0];
        const field = student[3];

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstName);
      });

      resolve(studentsByField);
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
}

module.exports = {
  readDatabase
};
