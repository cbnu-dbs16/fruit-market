import React, { useState } from "react";
import { StyledEachItem, Option } from './style';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { DeleteFruit } from '../../action/carts';

function EachItem(props){
    const [item, setItem] = useState({...props.item});
    const [select, setselect] = useState(props.select);
    // console.log(item);
    const decreasecnt = () => {
        if(item.count > 1)
            setItem({...item, count: item.count - 1, price: (item.price / item.count) * (item.count - 1)});
    }
    const increasecnt = () => {
        if(item.count >= 1)
            setItem({...item, count: item.count + 1, price: (item.price / item.count) * (item.count + 1)});
    }
    const selectitem = () => {
        setselect(!select);
    }
    const deleteitem = () => {
        // DeleteFruit(item)
        // .then(e => {
        //     console.log(e);
        // })
        // .catch(e => {
        //     console.log(e);
        // })
    }
    return (
        <StyledEachItem>
        <div className="content">
            <ul className="incartlist">
                <li>
                    <div className="item">
                        <label className="check">
                            {select ? <CheckCircleIcon onClick={selectitem}/> : <CheckCircleOutlineIcon onClick={selectitem}/>}
                        </label>
                        <img src={item.img} width={120} height={120}/>
                        <div className="inner_name">
                            <p>{item.fruitname}</p>
                        </div>
                        <div className="price">
                            <span className="count">
                                <button type="button" onClick={()=>{decreasecnt()}}>-</button>
                                <input type="number" readOnly="readonly" value={item.count} style={{width: '30px', height: '30px', border: 0, padding: '0 0 0 1em', textAlign: 'center'}}/>
                                <button type="button" onClick={()=>{increasecnt()}}>+</button>
                            </span>
                            <span className="selling" style={{border: '0'}}>{item.price}원</span>
                        </div>     
                    </div>
                    <button type="button" className="btn_delete"><DeleteIcon onClick={deleteitem()}/></button>
                </li>
            </ul>
        </div>
        </StyledEachItem>
    );
}

export default EachItem;