const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middleware/authenticateToken');

router.get('/',  authMiddleware.isAuthenticated ,projectController.getAllProjects);
router.get('/:id', authMiddleware.isAuthenticated , projectController.getProjectById);
router.post('/', authMiddleware.isAuthenticated , projectController.createProject);
router.put('/:id', authMiddleware.isAuthenticated , projectController.updateProject);
router.delete('/:id', authMiddleware.isAuthenticated , projectController.deleteProject);

module.exports = router;