const BaseService = require("./base.service");
let _commnetRepository = null;
let _ideaRepository = null;

class CommentService extends BaseService {
  constructor({ CommentRepository, IdeaRepository }) {
    super(CommentRepository);
    _commnetRepository = CommentRepository;
    _ideaRepository = IdeaRepository;
  }

  async getIdeaComments(ideaId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = "ideaId must be sent";
      throw error;
    }

    const idea = _ideaRepository.get(ideaId);

    if (!idea) {
      const error = new Error();
      error.status = 400;
      error.message = "idea does not exist";
    }

    const { comment } = idea;
    return comment;
  }

  async createComment(comment, ideaId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = "IdeaId must be sent";
      throw error;
    }

    const idea = _ideaRepository.get(ideaId);

    if (!idea) {
      const error = new Error();
      error.status = 400;
      error.message = "idea does not exist";
    }

    const createdComment = _commnetRepository.create(comment);
    idea.comments.push(createdComment);

    return await _ideaRepository.update(ideaId, { commnets: idea.comments });
  }
}

module.exports = CommentService;
