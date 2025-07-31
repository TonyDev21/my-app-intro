import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Navbar from "../moleculs/Navbar";
import ShoppingCart from "../moleculs/ShoppingCart";

const CartPage = () => {
  
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <Navbar />
      <h3>Tus productos seleccionados</h3>
      {cartItems.map((item) => (
        <ShoppingCart   key={item.id} 
                        {...item}
                        onClick={()=>removeFromCart(item.id)}
        />
      ))}
      <p>Total: {total}</p>
    </div>
  );
};

export default CartPage;
