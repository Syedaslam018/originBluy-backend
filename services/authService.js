const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
exports.register = async ({ username, email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    return { status: 201, data: { message: 'User registered successfully' } };
};

exports.login = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) return { status: 400, data: { message: 'User not found' } };
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return { status: 400, data: { message: 'Invalid credentials' } };
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { status: 200, data: { token, userId: user._id } };
};
