import React, { useState, useEffect } from 'react';
import { StyledDetail } from './style';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import GetDetailItem from '../../action/detail';
import { Link } from "react-router-dom"

const ProductDetail = () => {
    const navigate = useNavigate();
    const itemname = useParams();
    const [item, setItem] = useState({
        fno: 0,
        fname: "",
        fimage: "",
        Price: 0,
        Count: 0,
        Expiration_date: "",
    });

    useEffect(()=>{
        getItemInfo();
    }, []);

    const getItemInfo = async () => {
        await GetDetailItem(itemname.fno)
        .then(data => {
            console.log(data)
            setItem({...item, fno: data.fno, fimage: data.fimage, fname: data.fname, Price: data.Price, Expiration_date: data.Expiration_date, Count: data.Count});
        })
        .catch(e => {
            console.log(e)
        })
    }

    const handleAddToCart = () => {

    }

    const decreasecnt = () => {
        if(item.count > 1)
            setItem({...item, Count: item.Count - 1, Price: (item.Price / item.Count) * (item.Count - 1)});
    }
    const increasecnt = () => {
        if(item.count >= 1)
            setItem({...item, Count: item.Count + 1, Price: (item.Price / item.Count) * (item.Count + 1)});
    }
      
    return (
        <StyledDetail>
        <div>
        <div className="content">
            <div className="basic">
                <img src={item.fimage} width={350} height={350} />
                <div>
                    <button onClick={() => navigate(-1)}>
                        <p className="golist"> &lt; 목록으로 &gt; </p>
                    </button>
                </div>
            </div>
            <div className="items_info">
                <p className="items_name">
                    <strong className="name">이름{item.fname}</strong>
                </p>
                <dl className="list fst">
                    <dt className="tit">가격</dt>
                    <dd className="desc">{item.Price}원</dd>
                </dl>
                <dl className="list">
                    <dt className="tit">구매수량</dt>
                    <dd className="desc">
                        <span className="count">
                            <button type="button" onClick={()=>{decreasecnt()}}>-</button>
                            <input type="number" readOnly="readonly" value={item.Count} style={{width: '30px', height: '20px', border: 0, padding: '0px 0px 0px 10px', textAlign: 'center'}}/>
                            <button type="button" onClick={()=>{increasecnt()}}>+</button>
                        </span>
                    </dd>
                </dl>
                <dl className="list">
                    <dt className="tit">유통기한</dt>
                    <dd className="desc">{item.Expiration_date}</dd>
                </dl>
                <dl className="list">
                    <dt className="tit">배송구분</dt>
                    <dd className="desc">새벽배송 / 일반배송</dd>
                </dl>
                <button className="cartBtn" onClick={handleAddToCart} style={{
                    background: 'linear-gradient(45deg, #A814E7 30%, #288CD2 92%)',
                    border: '1px solid grey',
                    borderRadius: '3px',
                    color: 'white',
                    fontSize: '16px',
                    padding: '16px 100px'}}>장바구니 담기</button>
            </div>
            </div>
            <div className="item_view_tab">
                <Link to="comment">후기</Link>
            </div>
            <div class="board-item-container">
                <Outlet />
                <div class="inquiry-board-header">
                    <li>제목</li>
                    <li>작성자</li>
                    <li>작성일</li>
                </div>
                <ul class="inquiry-notice-list">
                    <li class="inquiry-item notice-item">
                        <div class="item-cell notice-cell">
                            <strong>판매 (일시)중단 제품 안내 (21.12.03 업데이트)</strong>
                        </div>
                        <div class="item-cell">
                            <p class="txt_sub text_medium normal ">Marketkurly</p>
                        </div>
                        <div class="item-cell">
                            <p class="txt_sub text_medium normal ">2017.02.01</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </StyledDetail>
    );
}

export default ProductDetail;
