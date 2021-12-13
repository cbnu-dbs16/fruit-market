import CommentService from '../services/commentservice';

export const GetCommentList = async fno => {
    try {
      const res = await CommentService.getCommentList(fno)
      console.log(res);
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
}

export const PostComment = async fklist => {
  try {
    const res = await CommentService.postComment(fklist)
    console.log(res);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
}

export default GetCommentList;