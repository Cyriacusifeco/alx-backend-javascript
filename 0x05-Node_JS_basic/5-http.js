const http = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2]; // Get the database file path from command-line arguments

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    countStudents(databasePath)
      .then(() => {
        const stdoutWrite = process.stdout.write;
        const capturedStdout = [];
        process.stdout.write = (text) => {
          capturedStdout.push(text);
        };

        countStudents(databasePath)
          .then(() => {
            process.stdout.write = stdoutWrite;
            const studentInfo = capturedStdout.join('');
            res.end(studentInfo);
          })
          .catch(error => {
            process.stdout.write = stdoutWrite;
            res.statusCode = 500;
            res.end(error.message + '\n');
          });
      })
      .catch(error => {
        res.statusCode = 500;
        res.end(error.message + '\n');
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

app.listen(1245);

module.exports = app;
