import React, { useContext } from 'react'
import ProductItem from '../components/ProductItem';
import { shoppingCartContext } from '../context';
import { useNavigate } from 'react-router-dom';

function ProductList() {
    const {loading,products} = useContext(shoppingCartContext);
    const navigate = useNavigate();

    if (loading) return <h1>Loading data! Please wait.</h1>;
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-md mx-auto text-center">
                <h2 className="text-3xl font-extraligt text-gray-950 sm:text-4xl">
                    MURALI'S STORE
                </h2>
            </div>
            <div className="flex justify-end">
                <button 
                    onClick={()=> navigate("/cartlist")}
                    className="px-5 mt-5 py-2 rounded-none bg-black text-white font-bold text-lg"
                >
                    🛒 GO TO CART
                </button>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
                {
                    products && products?.length>0?(
                        products.map((singleProduct)=>(<ProductItem singleProduct={singleProduct}/>)
                    )):(
                        <h3>No Products Found</h3>
                    )
                }
            </div>
        </div>
    </section>
  )
}

export default ProductList;
