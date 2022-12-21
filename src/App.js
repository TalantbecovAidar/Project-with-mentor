import React from 'react';
import Navbar from './components/Navbar/Navbar';
import AuthContextProvider from './contexts/authContext';
import ProductsContextProvider from './contexts/productsContext';
import MainRoutes from './routes/MainRoutes';

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <ProductsContextProvider>
          <Navbar/>
        <MainRoutes/>
        </ProductsContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;