const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');

router.post('/newTask', TaskController.newTask);
router.get('/tasks', TaskController.listAllTasks);
router.get('/task/:id', TaskController.listTask);

module.exports = router;