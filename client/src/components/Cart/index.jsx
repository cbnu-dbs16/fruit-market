import React, { useEffect, useState } from "react";
import { Bringcartlist } from "../../action/carts";
import StyledCart from './style';
import EachItem from './eachitem';

const Cart = () => {
    const [itemincart, setitemincart] = useState([{
        img: '',
        itemname: '',
        price: 0,
        count: 0,
    }]);

    useEffect(()=>{
        Bringcartlist()
        .then(e => {
            console.log(e);
            setitemincart({...itemincart, 
                img: '',
                itemname: '',
                price: 0,
                count: 0, });
        })
        .catch(e => {
            console.log(e);
        })
    })

    return (
        <StyledCart>
            <div className="content">
                Cart
                <div className="listincart">
                    {itemincart.map((item)=>{
                        <EachItem key={item.itemname} item={item}/>
                    })}
                </div>
            </div>
        </StyledCart>
    )
}
export default Cart;