const Task = require('../../models/task')

async function createTask(req, res) {
    try {
        const task = await Task.create(req.body)
        res.json(task)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function index(req, res) {
    const tasks = await Task.find({})
    res.json(tasks)
}

module.exports = {
    createTask,
    index
}