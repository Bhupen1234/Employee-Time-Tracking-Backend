const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  module: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Module'
  },
  description: String,
  
  status: {
    type: String,
    enum: ['Todo', 'In Progress', 'Completed'],
    default: 'Todo'
  },

  priority:{
    type: String,
    enum: ['High', 'Medium', 'Low'],
    default: 'Medium'
  }
 
},{
    timestamps:true
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;