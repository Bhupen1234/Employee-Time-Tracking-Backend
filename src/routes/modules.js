const express = require('express');
const router = express.Router();
const moduleController = require('../controllers/moduleController');
const authMiddleware = require('../middleware/authenticateToken');

router.get('/', authMiddleware.isAuthenticated , moduleController.getAllModules);
router.get('/:id', authMiddleware.isAuthenticated , moduleController.getModuleById);
router.post('/',  authMiddleware.isAuthenticated ,moduleController.createModule);
router.put('/:id', authMiddleware.isAuthenticated , moduleController.updateModule);
router.delete('/:id', authMiddleware.isAuthenticated , moduleController.deleteModule);

module.exports = router;