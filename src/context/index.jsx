import React, { createContext, useContext, useEffect, useState } from 'react';
import { json, useNavigate } from 'react-router-dom';

export const shoppingCartContext = createContext(null);

function ShoppingCartProvider({children}) {
    const [loading,setLoading] = useState(true);
    const [products,setProducts] = useState([]);
    const [productDetails,setProductDetails] = useState(null);
    const [cartItems,setCartItems] = useState([]);

    const navigate = useNavigate();

    async function fetchListOfProducts(){
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        if(data && data?.products){
            setProducts(data.products);
            setLoading(false);
        }
    }
    

    function handleAddToCart(getProductDetails){

      let ExistingCartItems = [...cartItems];
      const findIndexOfCurrentItem = ExistingCartItems.findIndex(
        (cartItem) => cartItem.id === getProductDetails.id
      );

      if(findIndexOfCurrentItem === -1){
        ExistingCartItems.push({
          ...getProductDetails,
          quantity : 1,
          totalPrice : getProductDetails.price
        });
      } else{
        ExistingCartItems[findIndexOfCurrentItem] = {
          ...ExistingCartItems[findIndexOfCurrentItem],
          quantity : ExistingCartItems[findIndexOfCurrentItem].quantity + 1,
          totalPrice : (ExistingCartItems[findIndexOfCurrentItem].quantity+1)* ExistingCartItems[findIndexOfCurrentItem].price
        }
      }
      setCartItems(ExistingCartItems);
      localStorage.setItem("cartItems",JSON.stringify(ExistingCartItems));
      navigate("/cartlist");
    }


    function handleRemoveFromCart(getProductDetails, isFullyRemoveFromCart) {
      let cpyExistingCartItems = [...cartItems];
      const findIndexOfCurrentCartItem = cpyExistingCartItems.findIndex(
        (item) => item.id === getProductDetails.id
      );
  
      if (isFullyRemoveFromCart) {
        cpyExistingCartItems.splice(findIndexOfCurrentCartItem, 1);
      } else {
        cpyExistingCartItems[findIndexOfCurrentCartItem] = {
          ...cpyExistingCartItems[findIndexOfCurrentCartItem],
          quantity: cpyExistingCartItems[findIndexOfCurrentCartItem].quantity - 1,
          totalPrice:
            (cpyExistingCartItems[findIndexOfCurrentCartItem].quantity - 1) *
            cpyExistingCartItems[findIndexOfCurrentCartItem].price,
        };
      }
  
      localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
      setCartItems(cpyExistingCartItems);
    }


    useEffect(()=>{
        fetchListOfProducts();
        setCartItems(JSON.parse(localStorage.getItem("cartItems") || "[]"));
    },[]);


    console.log(cartItems);

  return (
    <shoppingCartContext.Provider value={{products,setProducts,loading,setLoading,productDetails,setProductDetails,handleAddToCart,cartItems,handleRemoveFromCart}}>{children}</shoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider;
