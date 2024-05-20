// src/components/ProductList.js
import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { products, loading } = useContext(ProductContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
