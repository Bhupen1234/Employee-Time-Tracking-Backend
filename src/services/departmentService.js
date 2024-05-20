const Department = require('../models/department');
const User = require('../models/user');

const getAllDepartments = async () => {
  return Department.find({});
};

const getDepartmentById = async (id) => {
  return Department.findById(id);
};

const createDepartment = async (departmentData,userId) => {

    const user = await User.findById(userId);

    if(user.role ==="Admin"){
        const department = new Department(departmentData);
        await department.save();
        return department;
    }

    else{
        throw new Error("You are not authorized to perform this action");
    }
  
  
};

const updateDepartment = async (id, updatedData,userId) => {
    const user = await User.findById(userId);

    if(user.role ==="Admin"){
        return Department.findByIdAndUpdate(id, updatedData, { new: true });
    }

    else{
        throw new Error("You are not authorized to perform this action");
    }
  
  
};

const deleteDepartment = async (id,userId) => {
    const user = await User.findById(userId);

    if(user.role ==="Admin"){
        return Department.findByIdAndDelete(id);
    }

    else{
        throw new Error("You are not authorized to perform this action");
    }

};

module.exports = {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment
};