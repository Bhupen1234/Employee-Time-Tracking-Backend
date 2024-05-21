const mongoose = require('mongoose');

const timeLogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: String,
  duration: String,
  notes: String,
  
},{
    timestamps:true
});

const TimeLog = mongoose.model('TimeLog', timeLogSchema);

module.exports = TimeLog;