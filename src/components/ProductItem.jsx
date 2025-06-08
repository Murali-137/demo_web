import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { shoppingCartContext } from "../context";

function ProductItem({ singleProduct }) {
  const navigate = useNavigate();
  const { handleAddToCart,cartItems } = useContext(shoppingCartContext);

  function handleNavigateToProductDetailsPage(getCurrentProductId) {
    navigate(`/productdetails/${getCurrentProductId}`);
  }
  return (
    <div className="relative group border border-cyan-700 p-6 cursor-pointer">
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          src={singleProduct?.thumbnail}
          alt={singleProduct?.title}
          className="oject-cover w-full h-full transition-all duration-300 group-hover:scale-125"
        />
      </div>
      <div className="flex items-start justify-between mt-4 space-x-4">
        <div className="font-bold text-gray-900 sm:text-sm text-xs md:text-base">
          <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
            {singleProduct?.title}
          </p>
        </div>
        <div className="text-right">
          <p classsName="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">
            ${singleProduct?.price}
          </p>
        </div>
      </div>
      <button
        className="px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg"
        onClick={() => handleNavigateToProductDetailsPage(singleProduct?.id)}
      >
        View Details
      </button>
      <button
        disabled={
          cartItems.findIndex((item) => item.id === singleProduct.id) > -1
        }
        onClick={() => handleAddToCart(singleProduct)}
        className="disabled:opacity-65 mt-5 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
