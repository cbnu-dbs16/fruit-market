import React, { useState } from "react";

function EachItem(props){
    const [item, setItem] = useState({...props.item});
    console.log(item);
    return (
        <div className="content">
            {item.itemname}
        </div>
    );
}

export default EachItem;