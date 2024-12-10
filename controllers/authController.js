const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Determine the role (default is 'user')
        const userRole = role === 'admin' ? 'admin' : 'user';

        // Create a new user with the hashed password and role
        const user = new User({ name, email, password: hashedPassword, role: userRole });

        await user.save();
        res.status(201).json({ message: "User created successfully", user: { name, email, role: user.role } });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
  