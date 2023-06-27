require('dotenv').config();
require('./config/database');
const Task = require('./models/task')

// Task.create({
//     user: "6499affde5d6a4bb48f838d0", 
//     text: "hello beth"
// })
// .then(console.log)
// .catch(console.error)

Task.find({})
.then(console.log)
.catch(console.error)