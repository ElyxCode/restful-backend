const BaseRepository = require("./base.respository");
let _idea = null;

class IdeaRepository extends BaseRepository {
  constructor({ Idea }) {
    super(Idea);
    _idea = Idea;
  }

  async getUserIdeas(author) {
    return await _idea.find({ author });
  }
}

module.exports = IdeaRepository;
