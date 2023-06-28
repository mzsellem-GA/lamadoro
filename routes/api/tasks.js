const express = require('express')
const router = express.Router()
const tasksCtrl = require('../../controllers/api/tasks')

router.post('/', tasksCtrl.createTask)
router.get('/', tasksCtrl.index)
router.patch('/:id', tasksCtrl.updateTask)
router.delete('/:id', tasksCtrl.deleteTask)


module.exports = router