import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Navbar from "../moleculs/Navbar";
import ShoppingCart from "../moleculs/ShoppingCart";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const CartPage = () => {
  const { cartItems, removeFromCart, incrementItem, decrementItem, clearCart } =
    useContext(CartContext);

  const total = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const isEmpty = total == 0;

  return (
    <div className="container mx-auto">
      <div className="lg:m-10">
        <Navbar />
        {!isEmpty && (
          <div className="flex justify-between px-4 mb-8">
            <h3 className="text-4xl font-semibold">Shopping Cart</h3>
            <button onClick={clearCart} className="text-lg text-gray-500">
              Clear All
            </button>
          </div>
        )}
        {isEmpty && (
          <div className="flex flex-col justify-center items-center p-8 space-y-3 mt-40">
            <h3 className="text-4xl font-bold">Your cart is empty</h3>
            <p className="text-center text-xl text-gray-700">
              Looks like you haven't added any items to your cart yet. Start
              shopping to fill it up!
            </p>
          </div>
        )}
        {cartItems.map((item) => (
          <ShoppingCart
            key={item.id}
            {...item}
            onRemove={() => removeFromCart(item.id)}
            onIncrement={() => incrementItem?.(item.id)}
            onDecrement={() => decrementItem?.(item.id)}
          />
        ))}
        <div className="flex justify-between m-8 text-3xl font-bold">
          <p className="inline-block">Total: </p>
          <p className="inline-block">${total.toFixed(2)}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 p-4">
          <Link
            to="/"
            className={`flex-1 py-4 rounded-3xl text-xl cursor-pointer flex justify-center items-center ${
              isEmpty && "bg-black text-white"
            }`}
          >
            <FaArrowLeft className="mr-2" />
            Continue Shopping
          </Link>
          {!isEmpty && (
            <button className="bg-black text-white flex-1 py-4 rounded-3xl text-xl cursor-pointer hover:bg-gray-800 transition duration-200">
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
