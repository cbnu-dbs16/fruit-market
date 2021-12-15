import React, { useState } from "react";
import Option from './style';
import ImageListItem from '@mui/material/ImageListItem';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { AddFriut } from '../../action/carts';
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import cus_id from "../../api/user";

function Optionitem(props){
    const [item, setItem] = useState(props.item);
    const [cookies] = useCookies(['userid'])
    console.log(item);

    const decreasecnt = () => {
        if(item.Count > 1)
            setItem({...item, Count: item.Count - 1, Price: (item.Price / item.Count) * (item.Count - 1)});
    }
    const increasecnt = () => {
        if(item.Count >= 1)
            setItem({...item, Count: item.Count + 1, Price: (item.Price / item.Count) * (item.Count + 1)});
    }
    const handleAddcart = () => {
        const data = {
            cus_id: cus_id,
            fno: item.fno };
        console.log(data);
        AddFriut(data)
        .then(data => {
            console.log(data)
        })
        .catch(e => {
            console.log(e)
        })
    }
    return (
        <div className="option">
            <div className="quantity">
            <Option>
                <span className="count">
                <button type="button" onClick={()=>{decreasecnt()}}>-</button>
                <input type="number" readOnly="readonly" value={item.Count} style={{width: '30px', height: '30px', border: 0, padding: '0px 0px 0px 15px', textAlign: 'center'}}/>
                <button type="button" onClick={()=>{increasecnt()}}>+</button>
                </span>
            </Option>
            </div>
            <div className="carticon" onClick={handleAddcart}>
            <AddShoppingCartIcon />
            </div>
            <Link to={`/detail/${item.fno}`}>
                <ImageListItem key={item.fimage} style={{ margin: '120px 5px'}}>
                    <img src={`${item.fimage}`} alt={item.fname}/> 
                    <div className="itemname" style={{ float : 'left', margin: '15px 0px'}}>
                        <p>{item.fname}</p>
                    </div>
                    <div className="itemprice" style={{ float : 'left', margin: '15px 0px'}}>
                    <p>{item.Price}원</p>
                    </div>
                </ImageListItem>
            </Link>
        </div>
    );
}

export default Optionitem;