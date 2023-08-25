const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
	    const databasePath = req.databasePath;
      const data = await readDatabase(databasePath);
      const response = ['This is the list of our students'];
      
      Object.keys(data).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })).forEach((field) => {
        const studentCount = data[field].length;
        const studentList = data[field].join(', ');
        response.push(`Number of students in ${field}: ${studentCount}. List: ${studentList}`);
      });

      res.status(200).send(response.join('\n') + '\n');
    } catch (error) {
      res.status(500).send('Cannot load the database\n');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE\n');
      return;
    }

    try {
	    const databasePath = req.databasePath;
      const data = await readDatabase(databasePath);
      const studentList = data[major].join(', ');
      res.status(200).send(`List: ${studentList}\n`);
    } catch (error) {
      res.status(500).send('Cannot load the database\n');
    }
  }
}

module.exports = StudentsController;
