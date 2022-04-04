let express = require("express")
let bodyParser = require("body-parser")
let Port = 9000;

let app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
let todo = [{"id" : 1 , "task": "buy milk"}, {"id" :  2, "task": "buy water"}, {"id" : 3 , "task": "buy juice"}];
app.get('/', (req, res) =>{
    res.send(todo);
})
app.get('/:id', (req,res)=>{
  let task = req.body;
  task.id = Number(req.params.id);
  res.json(task)
})
app.post('/', (req, res) => {
    let newtodo = req.body;
    newtodo.id = todo.length +1; 
    todo.push(newtodo);
    res.send(todo)
})

app.put('/:id', (req, res) => {
  const index = todo.findIndex(item => item.id === Number (req.params.id));// retrieve the id parameter value
  console.log(index, req.params.id, typeof req.params.id);
  if (todo[index]){
    const newTodo=req.body;
    newTodo.id=Number(req.params.id)
    todo[index]=newTodo
    // res.status(204).send("Task Updated");
    console.log(todo[index]);
    res.json(todo[index])
  }else{
    res.status(404).send('The task is not found');
  }
});
  app.delete('/:id', (req, res) => {
    let index = todo.findIndex(item => item.id === Number(req.params.id));
    console.log(index, req.params.id, typeof req.params.id)
    todo.splice(index, 1);
    res.status(200).send(todo);
   });
app.listen(Port);