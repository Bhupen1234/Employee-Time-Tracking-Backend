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
  username:{
type:String,
  },
  startTime: {
    type: String,
    required: true
  },
  userFilePaths:{
    type:Array,
     default:[]
  },
  endTime: String,
  duration: String,
  notes: String,
  
},{
    timestamps:true
});

const TimeLog = mongoose.model('TimeLog', timeLogSchema);

module.exports = TimeLog;