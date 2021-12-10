import React, { useState, useEffect } from "react";
import ImageList from '@mui/material/ImageList';
import StyledProduct from './style';
import Optionitem from './option';
import GetList from "../../action/fruitlist";
// import { fruits } from "../../__mocks__/fruits";

const Product = () => {
  const [itemData, setItemData] = useState([]);

  const initialState = {
    fno: 0,
    fname: "",
    fimage: "",
    Price: 0,
    Count: 0,
    Expiration_date: "",
  };

  useEffect(()=>{
    GetList()
    .then(data => {
      console.log(data);
      setItemData(data);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <StyledProduct>
      <div className="content">
        <ImageList sx={{ width: '70rem', margin: "-70px auto", textAlign: 'center', overflow: 'visible' }} cols={3} rowHeight={250}>
          {itemData.map((item) => 
            <Optionitem key={item.fno+item.fruitname} item={item}/>
          )}
        </ImageList>
      </div>
    </StyledProduct>
  );
}

export default Product;