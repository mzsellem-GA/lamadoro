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

function taskDelete(req, res) {
    Task.findById(req.params.id)
        .then(task => {
            if (!task) throw new Error('No document is found matching that id')
            return task
        })
        .then(task => {
            return task.deleteOne()
        })
        .then(() => res.json('Task removed'))
        .catch(error => res.json(error))
}

module.exports = {
    createTask,
    index,
    taskDelete
}