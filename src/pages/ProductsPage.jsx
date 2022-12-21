import React from 'react';
import { Box, Grid } from '@mui/material';
import ProductsList from '../components/Products/ProductsList';

const ProductsPage = () => {
    return <Box>
        ProductsPage
        <Grid container spacing={3} >
            <ProductsList/>
        </Grid>
    </Box>
};

export default ProductsPage;