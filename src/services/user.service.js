const BaseService = require("./base.service");
let _userRepository = null;

class UserService extends BaseService {
  constructor({ UserRepository }) {
    super(UserService);
    _userRepository = UserRepository;
  }

  async getUserByUsername(username) {
    return await _userRepository.getUserbyUsername(username);
  }
}

module.exports = UserService;
