import { useFetch } from "../../hooks/useFetch";
import type { ProductCardProps } from "../../types/product";
import { useParams } from "react-router-dom";
import Navbar from "../moleculs/Navbar";
import Button from "../atomic/Button";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { LuShield } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoReload } from "react-icons/io5";

const ProductDetail = () => {

  const [isDisabled, setIsDisabled] = useState(false);

  const { id } = useParams();

  const context = useContext(CartContext);

  const { data, loading, error } = useFetch<ProductCardProps>(
    `https://fakestoreapi.com/products/${id}`
  );

  function handleClick() {
    if (isDisabled) return;
    
    if (data) {
      context.setCount(context.count + 1);
      context.setCartItems([...context.cartItems, data]);
      setIsDisabled(true);
    }
  }

  if (loading) return <p>Cargando Producto ...</p>;
  if (error) return <p>Cargando Producto ...</p>;

  console.log(context.cartItems, "Items seleccionados.");

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="w-5/6 mx-auto h-auto block lg:flex">
        <div className="w-full lg:w-1/2 h-[550px] lg:p-8">
          <img src={data?.image} alt={data?.title} className="w-full h-full object-fill" />
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="p-4 space-y-3">
            <h4 className="text-2xl">{data?.category}</h4>
            <h1 className="text-3xl font-bold">{data?.title}</h1>
            <h2 className="text-3xl font-bold">${data?.price}</h2>
          </div>
          <div className="p-4">
            <h3 className="text-2xl font-medium">Features</h3>
            <div className="text-2xl mt-4">
              <p className="flex items-center"><span className="inline-block pr-2 text-green-700"><LuShield /></span>2 year warranty included</p>
              <p className="flex items-center"><span className="inline-block pr-2 text-blue-700"><CiDeliveryTruck /></span>Free shipping worldwide</p>
              <p className="flex items-center"><span className="inline-block pr-2 text-purple-700"><IoReload /></span>30-day return policy</p>
            </div>
          </div>
          <Button label="Agregar al carrito" handleClick={handleClick} disabled={isDisabled} width="w-full py-4"/>
          <p className="text-center p-3 font-light">Free shipping on orders over $100</p>
        </div>
      </div>
      <div className="w-5/6 mx-auto h-auto mt-10 p-4 mb-4">
          <h4 className="text-3xl font-medium mb-4">Product Details</h4>
          <p className="text-xl">{data?.description}</p>
        </div>
    </div>
  );
};

export default ProductDetail;
