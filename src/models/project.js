const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department'
  },
  description: String,
  
},{
    timestamps:true
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;