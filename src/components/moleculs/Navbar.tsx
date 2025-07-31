import { useContext } from "react"
import CartItem from "../atomic/CartItem"
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const Navbar = () => {

  const context = useContext(CartContext);

  return (
    <nav className="mt-20 mb-10 flex gap-4 justify-between px-20 text-2xl">
        <div className="">
          <Link to="/" className="font-bold">E-commerce</Link>
        </div>
        <ul className="flex gap-4">  
            <li>Products</li>
            <Link to='/cart' className="flex items-center justify-center relative">
                <CartItem/>
                <span className="bg-red-400 text-white rounded-full px-2 absolute -top-4 -right-5">
                  {context.count}
                </span>
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar
