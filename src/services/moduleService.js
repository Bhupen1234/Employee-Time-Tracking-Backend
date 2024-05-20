const Module = require('../models/module');

const getAllModules = async () => {
  return Module.find();
};

const getModuleById = async (id) => {
  return Module.findById(id);
};

const createModule = async (moduleData) => {
  const module = new Module(moduleData);
  return module.save();
};

const updateModule = async (id, updatedData) => {
  return Module.findByIdAndUpdate(id, updatedData, { new: true });
};

const deleteModule = async (id) => {
  return Module.findByIdAndDelete(id);
};

module.exports = {
  getAllModules,
  getModuleById,
  createModule,
  updateModule,
  deleteModule
};