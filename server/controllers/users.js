import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../model/user.js';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: 'User doesnt exist' });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      'test',
      { expiresIn: '1h' }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: 'something went wrong' });
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: 'User already exist' });

    if (password !== confirmPassword)
      return res.status(400).json({ message: 'passwords dont match' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName}${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, 'test', {
      expiresIn: '1h',
    });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// User settings
export const getBackground = async (req, res) => {
  try {
    const backgrounds = await User.find({ creator: req.userId });
    console.log(backgrounds);
    res.status(200).json(backgrounds);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const changeBG = async (req, res) => {
  const background = req.body;

  const newBackgroundColor = new User({
    ...background,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newBackgroundColor.save();

    res.status(201).json(newBackgroundColor);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const deleteBG = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await User.findByIdAndRemove(id);

  res.json({ message: 'Post deleted successfully.' });
};
