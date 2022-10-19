import React from "react";
import ShopProvider from '../context/ShopProvider';
import NotFound from '../components/NotFound';
import Cart from '../containers/CartContainer';
import NavBar from '../components/NavBar';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import ItemListContainer from '../containers/ItemListContainer';
import FormProvider from '../context/FormProvider';
import Checkout from '../components/CheckoutForm';
import Footer from "../components/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Routing = () => {
    return (
        <ShopProvider>
        <FormProvider>
        <BrowserRouter> 
            <NavBar/>
            <Routes>
              <Route path = "/" element = {<ItemListContainer/>}/>
              <Route path = "/category/:categoryId" element={<ItemListContainer/>}/>
              <Route path = "/detail/:productId" element = {<ItemDetailContainer/>}/>
              <Route path = "/cart" element = {<Cart/>}/>
              <Route path = "/checkout" element = {<Checkout/>}/>
              <Route path = "*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
        <Footer/>
      </FormProvider>
      </ShopProvider>
    );
};

export default Routing;