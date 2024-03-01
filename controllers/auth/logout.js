import { status } from '../../const/index.js';
import { User } from '../../models/index.js';

export const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: null });

  res.json(status.USER_LOGOUT);
};
