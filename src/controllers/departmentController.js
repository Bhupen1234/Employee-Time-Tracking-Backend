const DepartmentService = require('../services/departmentService');

const getAllDepartments = async (req, res) => {
  try {

    const departments = await DepartmentService.getAllDepartments();
    res.json(departments);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getDepartmentById = async (req, res) => {
  try {
    const department = await DepartmentService.getDepartmentById(req.params.id);
    if (!department) {
      return res.status(404).send({ message: 'Department not found' });
    }
    res.json(department);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createDepartment = async (req, res) => {
  try {
    const department = await DepartmentService.createDepartment(req.body,req.user.id);

   
    res.status(201).json(department);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateDepartment = async (req, res) => {
  try {
    const updatedDepartment = await DepartmentService.updateDepartment(req.params.id, req.body,req.user.id);
    res.json(updatedDepartment);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteDepartment = async (req, res) => {
  try {
    await DepartmentService.deleteDepartment(req.params.id,req.user.id);
    res.status(200).send({ message: 'Department deleted successfully' });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment
};