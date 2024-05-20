const ProjectService = require('../services/projectService');

const getAllProjects = async (req, res) => {
  try {
    const projects = await ProjectService.getAllProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await ProjectService.getProjectById(req.params.id);
    if (!project) {
      return res.status(404).send({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createProject = async (req, res) => {
  try {
    const project = await ProjectService.createProject(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateProject = async (req, res) => {
  try {
    const updatedProject = await ProjectService.updateProject(req.params.id, req.body);
    res.json(updatedProject);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteProject = async (req, res) => {
  try {
    await ProjectService.deleteProject(req.params.id);
    res.status(200).send({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
};