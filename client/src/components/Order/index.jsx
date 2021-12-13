import React, { useEffect, useState } from "react";
import BringOrderlist from '../../action/order';
import Button from '@mui/material/Button';
import StyledOrder from "./style";

const Order = () => {
    const [orderitem, setOrderItem] = useState([]);

    useEffect(()=>{
        BringOrderlist()
        .then(data => {
            console.log(data);
            setOrderItem(data);
        })
        .catch(e => {
            console.log(e);
        })
    })

    const handleOrder = () => {
        alert('주문이 완료되었습니다.');
    }

    return (
        <StyledOrder>
        <div className="content">
            <h2 className="tit">주문서</h2>
            <div className="orderlist">
                <h3>주문상품</h3>
                <div className="order_goodslist">
                    <div className="info_product">
                        {/* {orderitem[0].fname} */}
                        <span className="num">외 {orderitem.length}개</span>상품을 주문합니다.
                    </div>
                </div>
            </div>
            <div className="orderlist">
                <h3>주문자 정보</h3>
                <div className="order_goodslist">
                <table class="goodsinfo_table">
                    <tbody>
                        <tr className="orderinfo">
                            <th>보내는 분</th>
                            <td>
                                신주영
                            </td>
                        </tr>
                        <tr className="orderinfo">
                            <th>휴대폰</th>
                            <td>
                                01011112222
                            </td>
                        </tr>
                        <tr className="orderinfo">
                            <th>이메일</th>
                            <td>
                                happyu9986@gmail.com
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div className="orderlist">
                <h3>배송 정보</h3>
                <div className="order_goodslist">
                <table class="goodsinfo_table">
                    <tbody>
                        <tr className="orderinfo">
                            <th>배송지</th>
                            <td>
                                충청북도 청주시 개신동 644
                            </td>
                        </tr>
                        <tr className="orderinfo">
                            <th>배송방법</th>
                            <td>
                                새벽배송
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div className="goorder">
            <button className="cartBtn" onClick={handleOrder} style={{
                background: 'linear-gradient(45deg, #A814E7 30%, #288CD2 92%)',
                border: '1px solid grey',
                borderRadius: '3px',
                color: 'white',
                fontSize: '16px',
                padding: '16px 100px'}}>{orderitem.reduce((acc, cur) => {
                    return acc + cur.Price;
                }, 0)}원 결제하기</button>
            </div>
        </div>
        </StyledOrder>
    )
}
export default Order;