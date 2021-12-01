import React from "react";

const Mypage = () => {
    const user = {username : '이름', orderlist: '주문내역', deliverycheck: '배송지 확인'}
    return (
        <div className="container">
            <p>{user.username}</p>
            <p>{user.orderlist}</p>
            <p>{user.deliverycheck}</p>
        </div>
    )
}
export default Mypage;