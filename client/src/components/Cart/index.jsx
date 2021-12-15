import React, { useEffect, useState } from "react";
import { Bringcartlist } from "../../action/carts";
import StyledCart from './style';
import EachItem from './eachitem';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '@mui/material/Button';
import btnStyles from "../../styles/Btnstyle";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import cus_id from "../../api/user";

const Cart = () => {
  const btnstyle = btnStyles();
    const [itemincart, setitemincart] = useState([{
        fimage: 'https://user-images.githubusercontent.com/63364990/144429788-bc133fa0-0bdb-4163-a375-1ef4d548b10f.png',
        fname: '유명산지 머스크 멜론',
        Price: 17900,
        Expiration_date: '2021-12-17',
        Count: 1
      },
      {
        fimage: 'https://user-images.githubusercontent.com/63364990/144431391-039a362d-800e-40ff-95b6-fff43686c750.png',
        fname: '실속 아보카도',
        Price: 6900,
        Expiration_date: '2021-12-23',
        Count: 1
      },
      {
        fimage: 'https://user-images.githubusercontent.com/63364990/144431413-1d8d0eee-13a4-4644-b146-e5cbaa1c224b.png',
        fname: '친환경 제주 레몬',
        Price: 29700,
        Expiration_date: '2022-01-01',
        Count: 3
      },
      {
        fimage: 'https://user-images.githubusercontent.com/63364990/144431444-3cde0cef-3cd7-4390-8ed0-f4482fbc43fb.png',
        fname: '칠레산 생체리',
        Price: 19800,
        Expiration_date: '2021-12-23',
        Count: 1
      },
      {
        fimage: 'https://user-images.githubusercontent.com/63364990/144429275-048d8aa0-02ec-4132-bba9-5b233c208d06.png',
        fname: '향기가득 샤인머스캣',
        Price: 13900,
        Expiration_date: '2022-01-10',
        Count: 1
    }
    ]);
    // const [itemincart, setitemincart] = useState([{
    //     fimage: '',
    //     fname: '',
    //     Price: 0,
    //     Count: 0,
    // }]);
    const [select, setselect] = useState(1);
    // const [cookies] = useCookies(['userid'])
    // useEffect(()=>{
    //   Bringcartlist(cus_id)
    //   .then(data => {
    //     console.log(data);
    //     setitemincart({...itemincart, 
    //       fimage: data.fimage,
    //       fname: data.fname,
    //       Price: data.Price,
    //       Count: data.Count,})
    //   })
    //   .catch(e => {
    //       console.log(e);
    //   })
    // }, [])
    const selectitem = () => {
      setselect(!select);
    }

    return (
        <StyledCart>
            <div className="content">
              <h2 className="tit">장바구니</h2>
              <div className="cart_select">
                <div className="inner_select">
                  <label className="check">
                    {select ? <CheckCircleIcon onClick={selectitem} style={{ padding: '0 20px 0 0'}}/> : <CheckCircleOutlineIcon onClick={selectitem} style={{ padding: '0 20px 0 0'}}/>}
                    전체선택
                  </label>
                  <span>|</span>
                  <a href="#none" className="btn_delete">선택삭제</a>
                </div>
                {/* <hr /> */}
              </div>
              <div className="listincart">
                  {itemincart.map((item)=>
                      <EachItem key={item.itemname} item={item} select={select}/>
                  )}
              </div>
              <div className="goorder">
                <Link to="/order">
                  <Button type="submit" variant="contained" className={btnstyle.btn}>주문하기</Button>
                </Link>
              </div>
            </div>
        </StyledCart>
    )
}
export default Cart;