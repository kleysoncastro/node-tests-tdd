import User from '../models/Users';

class UsersController {
  async store(req, res) {
    const { email } = req.body;

    const checkEmail = await User.findOne({ where: { email } });

    if (checkEmail) {
      return res.status(400).json({ erro: 'email já cadastrado' });
    }

    const user = await User.create(req.body);
    return res.json(user);
  }
}

export default new UsersController();
