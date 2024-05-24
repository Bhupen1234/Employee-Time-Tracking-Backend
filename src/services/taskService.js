const Task = require('../models/task');

const getAllTasks = async () => {
  return Task.find();
};

const getTaskById = async (id) => {
 const task = await Task.findById(id);
 console.log(task);
 return task;
};

const createTask = async (taskData) => {
  const task = new Task(taskData);
  return task.save();
};

const updateTask = async (id, updatedData) => {
  return Task.findByIdAndUpdate(id, updatedData, { new: true });
};

const deleteTask = async (id) => {
  return Task.findByIdAndDelete(id);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};