var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.set('view-engine', 'ejs')

app.use(express.urlencoded({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
 

app.get('/', (req, res)=>{
    res.render('/media/ubuntu/6AF240D1F240A2E5/Learning/todo/views/index.ejs')
})
app.post('/addtask' , (req, res) => {
    // var newTask = req.body.newTask
    // task.push(newTask);
    // res.redirect("/");
    console.log(req.body);
})




app.listen(3000)
