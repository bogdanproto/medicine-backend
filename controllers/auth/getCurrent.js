import { status } from '../../const/index.js';

export const getCurrent = async (req, res) => {
  const { email, name } = req.user;

  res.json({
    ...status.USER_CURRENT,
    user: {
      email,
      name,
    },
  });
};
