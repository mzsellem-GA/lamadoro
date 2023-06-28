const Task = require('../../models/task')

async function createTask(req, res) {
    console.log('req.body in createTask controller', req.body)
    try {
        const task = await Task.create(req.body)
        console.log("task in createTask controller", task)
        res.json(task)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function index(req, res) {
    const tasks = await Task.find({})
    res.json(tasks)
}

async function updateTask(req, res) {
    try {
        console.log('req in updateTask', req)
      const task = await Task.findById(req.params.id);
      if (!task) throw new Error('No document is found matching that id');
      
      task.text = req.body.text;
      const updatedTask = await task.save();
      
      res.json(updatedTask);
    } catch (error) {
      res.json(error);
    }
  }

async function deleteTask(req, res) {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) throw new Error('No document is found matching that id');
      
      await task.deleteOne();
      
      res.json('Task removed');
    } catch (error) {
      res.json(error);
    }
}
  

module.exports = {
    createTask,
    index,
    deleteTask,
    updateTask
}