import React from 'react';
import { Container, Grid } from '@material-ui/core';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <ProductList />
        </Grid>
        <Grid item xs={12} md={4}>
          <Cart />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
