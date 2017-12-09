const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskCtrl = require('./controller/taskController');

const app = new express();
app.use(cors());
app.use(bodyParser.json());





//endpoints
app.post('/api/task', taskCtrl.create);
app.get('/api/tasks', taskCtrl.read);
app.put('/api/task/:id', taskCtrl.update);
// app.put('/api/complete/:id', taskCtrl.complete);
app.delete('/api/task/:id', taskCtrl.delete);



const port = 4000;

app.listen(port, ()=>{
    console.log(`im on port ${port}.`)
});

