import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Navbar from "../moleculs/Navbar";
import ShoppingCart from "../moleculs/ShoppingCart";

const CartPage = () => {
  
  const context = useContext(CartContext);

  const [shoppingCart, setShoppingCart] = useState(context.cartItems);

  function handleDelete(id: number) {
    setShoppingCart(shoppingCart.filter((item) => item.id !== id));
  }

  const total = shoppingCart.reduce((total, item)=> total + item.price,0)
  return (
    <div>
      <Navbar />
      <h3>Tus productos seleccionados</h3>
      {shoppingCart.map((item) => (
        <ShoppingCart   key={item.id} 
                        {...item}
                        onClick={()=>handleDelete(item.id)}
        />
      ))}
      <p>Total: {total}</p>
    </div>
  );
};

export default CartPage;
