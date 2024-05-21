const Project = require('../models/project');

const getAllProjects = async () => {
  return Project.find({});
};

const getProjectById = async (id) => {
  return Project.findById(id);
};

const createProject = async (projectData) => {
  const project = new Project(projectData);
  await project.save();
  return project;
};

const updateProject = async (id, updatedData) => {
  return Project.findByIdAndUpdate(id, updatedData, { new: true });
};

const deleteProject = async (id) => {
  return Project.findByIdAndDelete(id);
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
};