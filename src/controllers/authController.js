const bcrypt = require('bcryptjs');

const AuthService = require('../services/authService');

const signup = async (req, res) => {
  try {
    const user = await AuthService.createUser(req.body);
    res.json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const {token,role} = await AuthService.loginUser({ email, password });
    res.json({ token ,role});
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

module.exports = { signup, login };