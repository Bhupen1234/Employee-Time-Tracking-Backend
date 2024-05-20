const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authenticateToken');

router.get('/',  authMiddleware.isAuthenticated ,taskController.getAllTasks);
router.get('/:id',  authMiddleware.isAuthenticated ,taskController.getTaskById);
router.post('/',  authMiddleware.isAuthenticated ,taskController.createTask);
router.put('/:id',  authMiddleware.isAuthenticated ,taskController.updateTask);
router.delete('/:id',  authMiddleware.isAuthenticated ,taskController.deleteTask);

module.exports = router;