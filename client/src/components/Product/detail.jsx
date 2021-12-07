import React, { useState, useEffect } from 'react';
import { StyledDetail } from './style';
import { useParams, useNavigate } from 'react-router-dom';
import GetDetailItem from '../../action/detail';

const ProductDetail = () => {
    const navigate = useNavigate();
    const itemname = useParams();
    console.log(itemname);
    const [item, setItem] = useState({
        img: '',
        fruitname: '',
        price: 1,
        description : '',
        expiredate: '',
        count: 1
    });

    useEffect(()=>{
        getItemInfo();
    });

    const getItemInfo = async () => {
        await GetDetailItem(itemname.name)
        .then(e => {
            console.log(e)
            // setItem({...item, img: e.img, fruitname: e.fruitname, price: e.price, expiredate: e.expiredate, count: e.count});
        })
        .catch(e => {
            console.log(e)
        })
    }

    const handleAddToCart = () => {

    }

    const decreasecnt = () => {
        if(item.count > 1)
            setItem({...item, count: item.count - 1, price: (item.price / item.count) * (item.count - 1)});
    }
    const increasecnt = () => {
        if(item.count >= 1)
            setItem({...item, count: item.count + 1, price: (item.price / item.count) * (item.count + 1)});
    }
      
    return (
        <StyledDetail>
        <div className="content">
            <div className="basic">
                <img src={item.img} width={350} height={350} />
                <div>
                    <button onClick={() => navigate(-1)}>
                        <p className="golist"> &lt; 목록으로 &gt; </p>
                    </button>
                </div>
            </div>
            <div className="items_info">
                <p className="items_name">
                    <strong className="name">이름{item.fruitname}</strong>
                </p>
                <dl className="list fst">
                    <dt className="tit">가격</dt>
                    <dd className="desc">{item.price}원</dd>
                </dl>
                <dl className="list">
                    <dt className="tit">구매수량</dt>
                    <dd className="desc">
                        <span className="count">
                            <button type="button" onClick={()=>{decreasecnt()}}>-</button>
                            <input type="number" readOnly="readonly" value={item.count} style={{width: '30px', height: '20px', border: 0, padding: '0px 0px 0px 10px', textAlign: 'center'}}/>
                            <button type="button" onClick={()=>{increasecnt()}}>+</button>
                        </span>
                    </dd>
                </dl>
                <dl className="list">
                    <dt className="tit">유통기한</dt>
                    <dd className="desc">{item.expiredate}</dd>
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
            <div className="detail_description">
                <div className="">
                    {/* {item.shortDescription} */}
                </div>
            </div>
        </div>
        </StyledDetail>
    );
}

export default ProductDetail;
