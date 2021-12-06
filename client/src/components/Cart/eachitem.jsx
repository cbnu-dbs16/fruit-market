import React, { useState } from "react";
import { StyledEachItem, Option } from './style';

function EachItem(props){
    const [item, setItem] = useState({...props.item});
    console.log(item);
    const decreasecnt = () => {
        if(item.count > 1)
            setItem({...item, count: item.count - 1, price: (item.price / item.count) * (item.count - 1)});
    }
    const increasecnt = () => {
        if(item.count >= 1)
            setItem({...item, count: item.count + 1, price: (item.price / item.count) * (item.count + 1)});
    }
    return (
        <StyledEachItem>
        <div className="content">
            <ul className="incartlist">
                <li>
                    <div className="item">
                        <label className="check" for="chkItemdad2a005-818f-49cd-a784-ca1a626f9f83">
                            <input type="checkbox" id="chkItemdad2a005-818f-49cd-a784-ca1a626f9f83" name="chkItem" data-item-id="dad2a005-818f-49cd-a784-ca1a626f9f83" data-item-no="69371" data-item-parent-no="69371" checked="" />
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
                    <button type="button" className="btn_delete">상품 삭제</button>
                </li>
            </ul>
        </div>
        </StyledEachItem>
    );
}

export default EachItem;