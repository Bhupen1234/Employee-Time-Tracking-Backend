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
  createdAt: {
    type: Date,
    default: Date.now
  }
},{
    timestamps:true
});

const Module = mongoose.model('Module', moduleSchema);

module.exports = Module;