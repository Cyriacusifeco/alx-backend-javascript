import express from 'express';
import routes from './routes';

const app = express();
const port = 1245;

app.use((req, res, next) => {
  req.databasePath = process.argv[2]; // Set databasePath on the request object
  next();
});

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
