import React, { useState, useEffect } from "react";
import ImageList from '@mui/material/ImageList';
import StyledProduct from './style';
import Optionitem from './option';
import GetList from "../../action/fruitlist";

const Product = () => {
      const [itemData, setItemData] = useState([{
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
      },
      {
        img: 'https://user-images.githubusercontent.com/63364990/144431448-13ead1c7-35cc-4f1e-8dba-fe802b4a6e12.png',
        fruitname: 'Hats',
        price: 1000,
        description : '소개',
        expiredate: '',
        count: 1
      },
      {
        img: 'https://user-images.githubusercontent.com/63364990/144431453-a34cd553-cb7d-4269-a15f-c7592a1d08d8.png',
        fruitname: 'Honey',
        price: 1000,
        description : '소개',
        expiredate: '',
        count: 1
      },
      {
        img: 'https://user-images.githubusercontent.com/63364990/144431458-35ddd7a6-1cc4-4e8e-a5be-61b956b2d1a4.png',
        fruitname: 'Basketball',
        price: 1000,
        description : '소개',
        expiredate: '',
        count: 1
      },
      {
        img: 'https://user-images.githubusercontent.com/63364990/144431471-bfb420cd-5410-4676-a860-18f0dbf4e6d8.png',
        fruitname: 'Fern',
        price: 1000,
        description : '소개',
        expiredate: '',
        count: 1
      },
      {
        img: 'https://user-images.githubusercontent.com/63364990/144431486-9c5b2c3e-5e12-47c8-bce5-3a5d6fde4453.png',
        fruitname: 'Mushrooms',
        price: 1000,
        description : '소개',
        expiredate: '',
        count: 1
      },
      {
        img: 'https://user-images.githubusercontent.com/63364990/144431494-47ff8ce0-13ae-453b-abad-4afc5cbcd730.png',
        fruitname: 'Tomato basil',
        price: 1000,
        description : '소개',
        expiredate: '',
        count: 1
      },
      {
        img: 'https://user-images.githubusercontent.com/63364990/144431503-10e45bf4-cf9c-4e88-b2bc-1fd71b16c00f.png',
        fruitname: 'Sea star',
        price: 1000,
        description : '소개',
        expiredate: '',
        count: 1
      },
      {
        img: 'https://user-images.githubusercontent.com/63364990/144431508-fb08152f-e073-4bd8-ab9b-9b110190d940.png',
        fruitname: 'Bike',
        price: 1000,
        description : '소개',
        expiredate: '',
        count: 1
      }]);

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