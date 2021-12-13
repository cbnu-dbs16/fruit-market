import { useEffect, useState } from 'react';
import { GetCommentList, PostComment } from '../../action/comment';
import { Button } from '@mui/material';

function Comment(){
    const fno = 1;
    const [commentlist, setCommentList] = useState({
        com_id: 0,
        comment: '',
        cname: ''
    })
    const [commentform, setCommentForm] = useState({
        state: false,
        content: '',
    });

    useEffect(()=>{
        GetCommentList(fno)
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    const handlecommentform = () => {
        setCommentForm({...commentform, state: true});
    }
    const postcomment = (e) => {
        // e.preventDefault();
        const fklist = {
            // cus_id: ,
            fno: fno,
        }
        PostComment(fklist)
        .then((data)=>{
            console.log(data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return(
        <div className="board-item-container">
            <button className="cartBtn" onClick={handlecommentform} style={{
                border: '1px solid #8a0a8a',
                borderRadius: '3px',
                color: 'black',
                fontSize: '12px',
                padding: '5px 10px',
                margin: '10px'}}>후기쓰기</button>
            {commentform.state ? 
                <div>
                    <form>
                        <input type="text" placeholder="한 줄 평을 작성해주세요 !" style={{
                            padding: '8px 15px',
                            margin: '0 10px'}}
                            onChange={(event)=>setCommentForm({...commentform, content: event.target.value})}/>
                        <button className="cartBtn" onClick={postcomment} style={{
                            border: '1px solid #8a0a8a',
                            borderRadius: '3px',
                            color: 'black',
                            fontSize: '12px',
                            padding: '5px 10px',
                            margin: '10px'}}>작성하기</button>
                    </form>
                </div>
                : null}
            <div className="review-header">
                <table className="review-listheader" width="100%" border="0" cellpadding="0" cellspacing="0">
                    <tbody>
                        <tr>
                            <th scope="col" className="input_txt">번호</th>
                            <th scope="col" className="input_txt">제목</th>
                            <th scope="col" className="input_txt" align="left">작성자</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="tr_line">
                <table className="review-listheaderd" width="100%" cellpadding="0" cellspacing="0">
                    <tbody>
                        {/* {commentlist.map(() => */}
                            <tr className="commentinfo">
                                <td className="commentno" align="center">
                                    1
                                    {/* {commentlist.com_id} */}
                                </td>
                                <td className="subject">
                                    <div>
                                        너무 맛있어요
                                        {/* {commentlist.comment} */}
                                    </div>
                                </td>
                                <td className="date">
                                    2021-12-02
                                    {/* {commentlist.cname} */}
                                </td>
                            </tr>
                            {/* )} */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Comment;