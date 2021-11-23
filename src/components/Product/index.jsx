import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Product = () => {
    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          fruitname: 'Breakfast',
          price: '1,000$'
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          fruitname: 'Burger',
          price: '1,000$'
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          fruitname: 'Camera',
          price: '1,000$'
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          fruitname: 'Coffee',
          price: '1,000$'
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          fruitname: 'Hats',
          price: '1,000$'
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          fruitname: 'Honey',
          price: '1,000$'
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          fruitname: 'Basketball',
          price: '1,000$'
        },
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          fruitname: 'Fern',
          price: '1,000$'
        },
        {
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          fruitname: 'Mushrooms',
          price: '1,000$'
        },
        {
          img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
          fruitname: 'Tomato basil',
          price: '1,000$'
        },
        {
          img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
          fruitname: 'Sea star',
          price: '1,000$'
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          fruitname: 'Bike',
          price: '1,000$'
        },
      ];

  return (
      <div className="container">
        <ImageList sx={{ width: 1000, height: 1000, margin: "auto" }} cols={3} rowHeight={250}>
            {itemData.map((item) => (
                <ImageListItem key={item.img} style={{ margin: '10px 50px'}}>
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.fruitname}
                        loading="lazy"
                        />
                    <div className="iteminfo" style={{ margin: '10px 50px' }}>
                        {item.fruitname}
                    </div>
                    <div className="iteminfo" style={{ margin: '10px 50px' }}>
                        {item.price}
                    </div>
                </ImageListItem>
            ))}
        </ImageList>
    </div>
  );
}

export default Product;