import React, { Fragment, useContext } from 'react'
import { shoppingCartContext } from '../context';

function CartItem({ singleCartItem }) {
  const { handleAddToCart, handleRemoveFromCart } = useContext(shoppingCartContext);

  return (
    <Fragment>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-4">
        {/* Left section: image + title + remove button */}
        <div className="flex items-start gap-4 flex-1">
          <div className="w-24 h-24 max-sm:w-20 max-sm:h-20 shrink-0 bg-gray-400 p-1 rounded-sm">
            <img
              src={singleCartItem?.thumbnail}
              alt={singleCartItem?.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="text-base font-bold text-gray-900">{singleCartItem?.title}</h3>
            <button
              onClick={() => handleRemoveFromCart(singleCartItem, true)}
              className="mt-2 sm:mt-4 text-sm px-4 py-2 bg-black text-white font-extrabold rounded hover:bg-gray-800 transition"
            >
              REMOVE
            </button>
          </div>
        </div>

        {/* Right section: price + quantity + buttons */}
        <div className="flex flex-col items-start sm:items-end gap-2 sm:gap-4">
          <h3 className="text-lg font-bold text-gray-900">${singleCartItem?.totalPrice.toFixed(2)}</h3>
          <p className="font-bold text-base">Quantity: {singleCartItem?.quantity}</p>
          <div className="flex gap-2">
            <button
              onClick={() => handleRemoveFromCart(singleCartItem, false)}
              className="disabled:opacity-50 disabled:cursor-not-allowed border border-black px-3 py-1 rounded hover:bg-gray-100 transition"
              disabled={singleCartItem?.quantity === 1}
            >
              -
            </button>
            <button
              onClick={() => handleAddToCart(singleCartItem)}
              className="border border-black px-3 py-1 rounded hover:bg-gray-100 transition"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-300" />
    </Fragment>
  );
}

export default CartItem;
