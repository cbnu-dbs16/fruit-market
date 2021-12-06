import React, { useEffect, useState } from "react";
import { Bringcartlist } from "../../action/carts";
import StyledCart from './style';
import EachItem from './eachitem';

const Cart = () => {
    const [itemincart, setitemincart] = useState([{
        img: 'https://user-images.githubusercontent.com/63364990/144433099-28fb1f9c-0027-4bab-be3f-20303dbc277c.png',
        fruitname: 'Breakfast',
        price: 1000,
        description : '소개',
        expiredate: '',
        count: 1
      },
      {
        img: 'https://user-images.githubusercontent.com/63364990/144431391-039a362d-800e-40ff-95b6-fff43686c750.png',
        fruitname: 'Burger',
        price: 1000,
        description : '소개',
        expiredate: '',
        count: 1
      },
      {
        img: 'https://user-images.githubusercontent.com/63364990/144431440-3c35aff5-9202-4cae-a37c-4311c576152c.png',
        fruitname: 'Camera',
        price: 1000,
        description : '소개',
        expiredate: '',
        count: 1
      },
      {
        img: 'https://user-images.githubusercontent.com/63364990/144431444-3cde0cef-3cd7-4390-8ed0-f4482fbc43fb.png',
        fruitname: 'Coffee',
        price: 1000,
        description : '소개',
        expiredate: '',
        count: 1
      }]);
    // const [itemincart, setitemincart] = useState([{
    //     img: '',
    //     itemname: '',
    //     price: 0,
    //     count: 0,
    // }]);

    useEffect(()=>{
        // Bringcartlist()
        // .then(e => {
        //     console.log(e);
        //     setitemincart({...itemincart, 
        //         img: '',
        //         itemname: '',
        //         price: 0,
        //         count: 0, });
        // })
        // .catch(e => {
        //     console.log(e);
        // })
    })

    return (
        <StyledCart>
            <div className="content">
                <div className="listincart">
                    {itemincart.map((item)=>
                        <EachItem key={item.itemname} item={item}/>
                    )}
                </div>
            </div>
        </StyledCart>
    )
}
export default Cart;