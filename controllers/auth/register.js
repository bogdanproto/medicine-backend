import bcrypt from 'bcryptjs';
import { status } from '../../const/index.js';
import { HttpError, createToken } from '../../helpers/index.js';
import { User } from '../../models/index.js';

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  const isUserExist = await User.findOne({ email });

  if (isUserExist) {
    throw HttpError(status.USER_CONFLICT);
  }

  const hashPass = await bcrypt.hash(password, 10);

  const { _id } = await User.create({
    email,
    name,
    password: hashPass,
  });

  const token = createToken(_id);

  const user = await User.findByIdAndUpdate(
    _id,
    { token },
    { new: true, select: 'name email' }
  );

  res.status(status.CREATED.status).json({
    ...status.CREATED,
    user,
    token,
  });
};
