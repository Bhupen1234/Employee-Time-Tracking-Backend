const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  },
  description: String,
  
},{
    timestamps:true
});

const Module = mongoose.model('Module', moduleSchema);

module.exports = Module;