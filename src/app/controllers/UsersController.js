import User from '../models/Users';

class UsersController {
  async store(req, res) {
    const user = await User.create(req.body);
    return res.json(user);
  }
}

export default new UsersController();
