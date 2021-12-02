import React, { useState } from "react";
import Option from './style';
import Optionstyle from './style';
import ImageListItem from '@mui/material/ImageListItem';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Optionitem(props){
    const [item, setItemData] = useState({...props.item});

    const decreasecnt = () => {
        if(item.count > 1)
            setItemData({...item, count: item.count - 1, price: (item.price / item.count) * (item.count - 1)});
    }
    const increasecnt = () => {
        if(item.count >= 1)
            setItemData({...item, count: item.count + 1, price: (item.price / item.count) * (item.count + 1)});
    }
    return (
        <div className="option">
            <div className="quantity">
            <Option>
                <span className="count">
                <button type="button" onClick={()=>{decreasecnt()}}>-</button>
                <input type="number" readOnly="readonly" value={item.count} style={{width: '30px', height: '30px', border: 0, padding: '0px 0px 0px 10px', marginRight: '-1px', lineHeight: '18px', textAlign: 'center'}}/>
                <button type="button" onClick={()=>{increasecnt()}}>+</button>
                </span>
            </Option>
            </div>
            <div className="carticon">
            <AddShoppingCartIcon />
            </div>
            <ImageListItem key={item.img} style={{ margin: '120px 5px'}}>
            <img
                src={`${item.img}`}
                alt={item.fruitname}
                />
            {/* <Optionstyle> */}
                <div className="itemname" style={{ float : 'left', margin: '15px 0px'}}>
                    <p>{item.fruitname}</p>
                </div>
                <div className="itemprice" style={{ float : 'left', margin: '15px 0px'}}>
                <p>{item.price}$</p>
                </div>
            {/* </Optionstyle> */}
            </ImageListItem>
        </div>
    );
}

export default Optionitem;