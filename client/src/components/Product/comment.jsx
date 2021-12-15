import { useEffect, useState } from 'react';
import { GetCommentList, PostComment } from '../../action/comment';
import { Button } from '@mui/material';
import Commentlist from '../../api/comment';

function Comment(){
    const [commentlist, setCommentList] = useState(Commentlist);
    const [commentform, setCommentForm] = useState({
        state: false,
        content: '',
    });

    // useEffect(()=>{
    //     GetCommentList(fno)
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // }, [])

    // useEffect(() => {
    //     setTimeout(function() {
    //         console.log('Works!');
    //     }, 3000);
    // }, [])

    const handlecommentform = () => {
        // setTimeout(()=>{}, 2000);
        setCommentForm({...commentform, state: true});
    }

    const postcomment = () => {
        setCommentList([...commentlist, {
            com_id: 4,
            comment: commentform.content,
            cname: '신주영',
            date: '2021-12-15'}]
        );
    }

    return(
        <div className="board-item-container">
            <button className="cartBtn" onClick={()=>handlecommentform()} style={{
                border: '1px solid #8a0a8a',
                borderRadius: '3px',
                color: 'black',
                fontSize: '12px',
                padding: '5px 10px',
                margin: '10px'}}>후기쓰기</button>
            {commentform.state ? 
                <div>
                    <input type="text" placeholder="한 줄 평을 작성해주세요 !" style={{
                        padding: '8px 15px',
                        margin: '0 10px'}}
                        onChange={(event)=>setCommentForm({...commentform, content: event.target.value})}/>
                    <button className="cartBtn" onClick={()=>postcomment()} style={{
                        border: '1px solid #8a0a8a',
                        borderRadius: '3px',
                        color: 'black',
                        fontSize: '12px',
                        padding: '5px 10px',
                        margin: '10px'}}>작성하기</button>
                </div>
                 : null}
            <div className="review-header">
                <table className="review-listheader" width="100%" border="0" cellpadding="0" cellspacing="0">
                    <tbody>
                        <tr>
                            <th scope="col" className="input_txt">번호</th>
                            <th scope="col" className="input_txt">제목</th>
                            <th scope="col" className="input_txt" align="left">작성자</th>
                            <th scope="col" className="input_txt" align="left">작성일</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="tr_line">
                <table className="review-listheaderd" width="100%" cellpadding="0" cellspacing="0">
                    <tbody>
                        {commentlist.map((comment) =>
                            <tr className="commentinfo">
                                <td className="commentno" align="center">
                                    {comment.com_id}
                                </td>
                                <td className="subject">
                                    <div>
                                        {comment.comment}
                                    </div>
                                </td>
                                <td className="name">
                                    {comment.cname}
                                </td>
                                <td className="date">
                                    {comment.date}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Comment;