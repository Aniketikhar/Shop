import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { PiShoppingCartLight, PiShoppingCartSimpleBold } from "react-icons/pi";

const Cart = ({ userEmail , theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log("hey there user");

    if (userEmail) {
      // Fetch the cart from localStorage
      const userCart =
        JSON.parse(localStorage.getItem(`cart_${userEmail}`)) || [];
      setCartItems(userCart);
    }
  }, [isOpen]);

  function removeFromCart(productTitle) {
    let userCart = JSON.parse(localStorage.getItem(`cart_${userEmail}`)) || [];
    userCart = userCart.filter((product) => product.title !== productTitle);

    localStorage.setItem(`cart_${userEmail}`, JSON.stringify(userCart));
    setCartItems(userCart);
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className={theme ? "text-white inline-flex justify-between w-full  px-4 py-2  text-2xl": "inline-flex justify-between w-full  px-4 py-2  text-2xl text-gray-700"}
        >
          <PiShoppingCartSimpleBold />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className={theme ? "py-1 bg-slate-800 rounded text-white": "py-1 rounded text-gray-700"}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {cartItems.length == 0 && (
              <div
                className={theme ? "flex px-4 py-2 text-sm  hover:bg-gray-700" : "flex px-4 py-2 text-sm  hover:bg-gray-200"}
                role="menuitem"
              >
                Add items to cart
              </div>
            )}
            {cartItems?.map((item, index) => (
              <div
                key={index}
                className={theme ? "flex px-4 py-2 text-sm  hover:bg-gray-700" : "flex px-4 py-2 text-sm  hover:bg-gray-200"}
                role="menuitem"
              >
                <div>
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-14 h-14 object-cover"
                  />
                </div>
                <div className="flex-1 ms-1">
                  <div className="flex justify-between">
                    <p title={item.title}>{truncateText(item.title, 10)}</p>
                    <p>${item.price}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>{`quantity: ${item.quantity}`}</p>
                    <button
                      onClick={() => removeFromCart(item.title)}
                      className="bg-red-500 px-2 py-1 text-xs text-white rounded"
                    >
                      remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
