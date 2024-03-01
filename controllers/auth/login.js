import bcrypt from 'bcryptjs';
import { status } from '../../const/index.js';
import { HttpError, createToken } from '../../helpers/index.js';
import { User } from '../../models/index.js';

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(status.USER_UNAUTHORIZED);
  }

  const isPassCorrect = await bcrypt.compare(password, user.password);

  if (!isPassCorrect) {
    throw HttpError(status.USER_UNAUTHORIZED);
  }

  const { _id } = user;

  const token = createToken(_id);

  await User.updateOne({ _id }, { token });

  res.json({
    ...status.USER_LOGIN,
    user: {
      email: user.email,
      name: user.name,
    },
    token,
  });
};
