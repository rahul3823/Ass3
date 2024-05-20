
import React from 'react';
import { ProductProvider } from './context/ProductContext';
import ProductList from './components/ProductList';

function App() {
  return (
    <ProductProvider>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <ProductList />
      </div>
    </ProductProvider>
  );
}

export default App;
