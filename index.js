const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json())
// const port = process.env.PORT
const port = 5000;
// const handler = (req, res ) => {
//     res.send('Hello World')
// }
// app.get('/', handler) orr
app.get('/', (req, res) => {
    res.send('Hello World from NODE JS and express')
});

const users = [
    {id: 1, name: 'Sakib', email: 'abc@gmail.com', phone: '0123456789' },
    {id: 2, name: 'Samim', email: 'abghghc@gmail.com', phone: '0123456789' },
    {id: 3, name: 'Tamim', email: 'abghc@gmail.com', phone: '0123456789' },
    {id: 4, name: 'Mushfiq', email: 'abc@gmail.com', phone: '0123456789' },
    {id: 5, name: 'Liton', email: 'abhghc@gmail.com', phone: '0123456789' },
    {id: 6, name: 'Sakib', email: 'abhghc@gmail.com', phone: '0123456789' },
]
app.get('/users', (req, res) => {
    // res.send('Here is my users')
    const search = req.query.search; 
    //query params
    if(search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResult)

    } else {
        res.send(users)
    }
   
})
//app POST method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)

})

//dynamic api
app.get('/users/:id',(req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
    
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yammi this is fazli')
})






app.listen(port, () => {
    console.log("listeing port from 3000");
});