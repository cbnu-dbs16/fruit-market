import React, { useState, useEffect } from "react";
import ImageList from '@mui/material/ImageList';
import StyledProduct from './style';
import Optionitem from './option';
import GetList from "../../action/fruitlist";
import { fruits } from "../../__mocks__/fruits";

const Product = () => {
  const [itemData, setItemData] = useState(fruits);

  useEffect(()=>{
    GetList()
    .then(e => {
      console.log(e);
      // setItemData({...itemData, 
      // img: ,
      // fruitname: ,
      // price: ,
      // description : ,
      // expiredate: ,
      // count: });
    })
    .catch(e => {
      console.log(e);
    })
  })

  return (
    <StyledProduct>
      <div className="content">
        <ImageList sx={{ width: '70rem', margin: "-70px auto", textAlign: 'center', overflow: 'visible' }} cols={3} rowHeight={250}>
          {itemData.map(function(item){
            return(
              <Optionitem key={item.fruitname} item={item}/>
            )
            }
          )}
        </ImageList>
      </div>
    </StyledProduct>
  );
}

export default Product;