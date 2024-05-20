const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');
const authMiddleware = require('../middleware/authenticateToken');

router.get('/', authMiddleware.isAuthenticated ,departmentController.getAllDepartments);
router.get('/:id', authMiddleware.isAuthenticated , departmentController.getDepartmentById);
router.post('/',  authMiddleware.isAuthenticated ,departmentController.createDepartment);
router.put('/:id',  authMiddleware.isAuthenticated ,departmentController.updateDepartment);
router.delete('/:id',  authMiddleware.isAuthenticated  ,departmentController.deleteDepartment);

module.exports = router;