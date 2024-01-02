const CrudRepository = require("./crud-repository");
const Comment = require("../models/comment.js");

class CommentRepository extends CrudRepository {
    constructor(){
        super(Comment)
    }
}

module.exports = CommentRepository;