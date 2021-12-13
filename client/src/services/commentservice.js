import http from '../common/http'

const getCommentList = fno => http.get(`comments/`, fno);
const postComment = fklist => http.post(`comments/`, fklist);

const CommentService = {
    getCommentList,
    postComment
}

export default CommentService
