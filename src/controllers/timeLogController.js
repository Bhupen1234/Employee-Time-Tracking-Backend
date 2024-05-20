const TimeLogService = require('../services/timeLogService');

const createTimeLog = async (req, res) => {
  try {
    const timeLog = await TimeLogService.createTimeLog(req.body);
    res.status(201).json(timeLog);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllTimeLogs = async (req, res) => {
  try {
    const timeLogs = await TimeLogService.getAllTimeLogs();
    res.json(timeLogs);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getTimeLogById = async (req, res) => {
  try {
    const timeLog = await TimeLogService.getTimeLogById(req.params.id);
    if (!timeLog) {
      return res.status(404).send({ message: 'Time log not found' });
    }
    res.json(timeLog);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTimeLog = async (req, res) => {
  try {
    const updatedTimeLog = await TimeLogService.updateTimeLog(req.params.id, req.body);
    res.json(updatedTimeLog);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteTimeLog = async (req, res) => {
  try {
    await TimeLogService.deleteTimeLog(req.params.id);
    res.status(200).send({ message: 'Time log deleted successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  createTimeLog,
  getAllTimeLogs,
  getTimeLogById,
  updateTimeLog,
  deleteTimeLog
};