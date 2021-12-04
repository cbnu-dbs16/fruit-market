import React, { useState } from "react";
import Option from './style';
import ImageListItem from '@mui/material/ImageListItem';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { AddFriut } from '../../action/carts';
import { Link } from "react-router-dom"

function Optionitem(props){
    const [item, setItem] = useState({...props.item});

    const decreasecnt = () => {
        if(item.count > 1)
            setItem({...item, count: item.count - 1, price: (item.price / item.count) * (item.count - 1)});
    }
    const increasecnt = () => {
        if(item.count >= 1)
            setItem({...item, count: item.count + 1, price: (item.price / item.count) * (item.count + 1)});
    }
    const handleAddcart = () => {
        // const item = {
        //     userid: , 
        //     itemid: }
        // AddFriut(item)
        // .then(e => {
        //     console.log(e)
        // })
        // .catch(e => {
        //     console.log(e)
        // })
    }
    return (
        <div className="option">
            <div className="quantity">
            <Option>
                <span className="count">
                <button type="button" onClick={()=>{decreasecnt()}}>-</button>
                <input type="number" readOnly="readonly" value={item.count} style={{width: '30px', height: '30px', border: 0, padding: '0px 0px 0px 15px', textAlign: 'center'}}/>
                <button type="button" onClick={()=>{increasecnt()}}>+</button>
                </span>
            </Option>
            </div>
            <div className="carticon" onClick={handleAddcart}>
            <AddShoppingCartIcon />
            </div>
            <Link to={`/detail/${item.fruitname}`}>
                <ImageListItem key={item.img} style={{ margin: '120px 5px'}}>
                    <img src={`${item.img}`} alt={item.fruitname}/> 
                    <div className="itemname" style={{ float : 'left', margin: '15px 0px'}}>
                        <p>{item.fruitname}</p>
                    </div>
                    <div className="itemprice" style={{ float : 'left', margin: '15px 0px'}}>
                    <p>{item.price}$</p>
                    </div>
                </ImageListItem>
            </Link>
        </div>
    );
}

export default Optionitem;