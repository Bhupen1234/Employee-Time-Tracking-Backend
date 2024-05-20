const ModuleService = require('../services/moduleService');

const getAllModules = async (req, res) => {
  try {
    const modules = await ModuleService.getAllModules();
    res.json(modules);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getModuleById = async (req, res) => {
  try {
    const module = await ModuleService.getModuleById(req.params.id);
    if (!module) {
      return res.status(404).send({ message: 'Module not found' });
    }
    res.json(module);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createModule = async (req, res) => {
  try {
    const module = await ModuleService.createModule(req.body);
    res.status(201).json(module);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateModule = async (req, res) => {
  try {
    const updatedModule = await ModuleService.updateModule(req.params.id, req.body);
    res.json(updatedModule);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteModule = async (req, res) => {
  try {
    await ModuleService.deleteModule(req.params.id);
    res.status(200).send({ message: 'Module deleted successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  getAllModules,
  getModuleById,
  createModule,
  updateModule,
  deleteModule
};