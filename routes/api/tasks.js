const express = require('express')
const router = express.Router()
const tasksCtrl = require('../../controllers/api/tasks')

router.post('/', tasksCtrl.createTask)
router.get('/', tasksCtrl.index)
router.delete('/:id', tasksCtrl.taskDelete)
router.patch('/:id', tasksCtrl.taskUpdate)


module.exports = router