const express = require('express')
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const departmentRoutes = require('./routes/departments');
const projectRoutes = require('./routes/projects');
const moduleRoutes = require('./routes/modules');
const taskRoutes = require('./routes/tasks');
const timeLogRoutes = require('./routes/time-logs');
const authMiddleware = require('./middleware/authenticateToken');
const timeLogController = require('./controllers/timeLogController');
const helmet = require('helmet')
const bodyparser = require('body-parser')

dotenv.config({ path: 'src/.env' });

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));  
app.use(helmet.crossOriginResourcePolicy({policy :"cross-origin"}))
app.use(bodyparser.json({limit:"30mb",extended :true}));
app.use(bodyparser.urlencoded({limit:"30mb",extended: true}))

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));  

app.post('/api/time-logs/', authMiddleware.isAuthenticated, upload.array('file', 12), timeLogController.createTimeLog);

app.get('/api/files', authMiddleware.isAuthenticated, (req, res) => {
  try {
    fs.readdir(path.join(__dirname, '../public/uploads'), (err, files) => {
      if (err) {
        return res.status(500).json({ msg: err.message });
      } else {
        return res.status(200).json({ files: files });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.use('/api/auth', authRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/modules', moduleRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/time-logs', timeLogRoutes);

app.get('/', (req, res) => {
  res.send('Backend Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
