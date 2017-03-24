import path from 'path';
import { Server } from 'http';
import Express from 'express';

const app = new Express();
const server = new Server(app);

app.use(Express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
