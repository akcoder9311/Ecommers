import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    
  };

  return (
    <Card style={{ marginBottom: '20px'}}>
      <CardMedia
        component="img"
        alt={product.title}
        height="100%"
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
