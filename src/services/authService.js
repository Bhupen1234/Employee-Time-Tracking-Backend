const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createUser = async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const newUser = new User({
    username: user.username,
    email: user.email,
    password: hashedPassword,
    role:user.role,
  });
  await newUser.save();
  return newUser;
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  console.log(user)
  if (!user) {
    throw new Error('User not found');
  }
  const passwordMatch = await bcrypt.compare(password, user.password);

  
  if (!passwordMatch) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return {token,role: user.role,userId: user._id};
};

module.exports = { createUser, loginUser };