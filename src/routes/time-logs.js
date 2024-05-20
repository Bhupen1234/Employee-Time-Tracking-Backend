const express = require('express');
const router = express.Router();
const timeLogController = require('../controllers/timeLogController');
const authMiddleware = require('../middleware/authenticateToken');

router.post('/',  authMiddleware.isAuthenticated ,timeLogController.createTimeLog);
router.get('/', authMiddleware.isAuthenticated , timeLogController.getAllTimeLogs);
router.get('/:id', authMiddleware.isAuthenticated , timeLogController.getTimeLogById);
router.put('/:id', authMiddleware.isAuthenticated , timeLogController.updateTimeLog);
router.delete('/:id',authMiddleware.isAuthenticated ,timeLogController.deleteTimeLog);

module.exports = router;