const TimeLog = require('../models/timeLog');

const createTimeLog = async (timeLogData) => {
  const timeLog = new TimeLog(timeLogData);
  return timeLog.save();
};

const getAllTimeLogs = async () => {
  return TimeLog.find();
};

const getTimeLogById = async (id) => {
  return TimeLog.findById(id);
};

const updateTimeLog = async (id, updatedData) => {
  return TimeLog.findByIdAndUpdate(id, updatedData, { new: true });
};

const deleteTimeLog = async (id) => {
  return TimeLog.findByIdAndDelete(id);
};

module.exports = {
  createTimeLog,
  getAllTimeLogs,
  getTimeLogById,
  updateTimeLog,
  deleteTimeLog
};