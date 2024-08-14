import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../actions/cartActions';
import { Card, CardContent, Typography, Button } from '@material-ui/core';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(item.id));
  };

  return (
    <Card style={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${item.price}
        </Typography>
        <div>
          <Button onClick={handleDecreaseQuantity}>-</Button>
          <span>{item.quantity}</span>
          <Button onClick={handleIncreaseQuantity}>+</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartItem;
