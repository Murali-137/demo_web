import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { shoppingCartContext } from "../context";

function ProductItem({ singleProduct }) {
  const navigate = useNavigate();
  const { handleAddToCart, cartItems } = useContext(shoppingCartContext);

  function handleNavigateToProductDetailsPage(getCurrentProductId) {
    navigate(`/productdetails/${getCurrentProductId}`);
  }

  return (
    <div className="relative group border border-cyan-700 p-4 sm:p-6 cursor-pointer rounded-md shadow-sm bg-white">
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          src={singleProduct?.thumbnail}
          alt={singleProduct?.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
        <div className="font-bold text-gray-900 text-base sm:text-lg truncate w-full sm:w-auto">
          <p className="truncate">{singleProduct?.title}</p>
        </div>
        <div className="text-right text-gray-900 font-semibold text-sm sm:text-base">
          ${singleProduct?.price}
        </div>
      </div>

      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <button
          className="w-full sm:w-auto px-4 py-2 bg-black text-white font-bold text-base rounded-md hover:bg-gray-900 transition"
          onClick={() => handleNavigateToProductDetailsPage(singleProduct?.id)}
        >
          View Details
        </button>

        <button
          disabled={
            cartItems.findIndex((item) => item.id === singleProduct.id) > -1
          }
          onClick={() => handleAddToCart(singleProduct)}
          className="w-full sm:w-auto px-3 py-2 text-sm sm:text-base mt-3 sm:mt-5 border border-gray-800 text-gray-800 font-semibold rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
