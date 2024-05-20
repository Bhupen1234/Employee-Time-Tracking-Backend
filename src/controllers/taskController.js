const TaskService = require('../services/taskService');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await TaskService.getTaskById(req.params.id);
    if (!task) {
      return res.status(404).send({ message: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await TaskService.createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const updatedTask = await TaskService.updateTask(req.params.id, req.body);
    res.json(updatedTask);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    await TaskService.deleteTask(req.params.id);
    res.status(200).send({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};