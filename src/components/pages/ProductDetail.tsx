import { useFetch } from "../../hooks/useFetch";
import type { ProductCardProps } from "../../types/product";
import { useParams } from "react-router-dom";
import Navbar from "../moleculs/Navbar";
import Button from "../atomic/Button";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

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
    <div>
      <Navbar />
      <h1>{data?.title}</h1>
      <img src={data?.image} alt={data?.title} className="max-w-[150px]" />
      <p>{data?.description}</p>
      <Button label="Agregar al carrito" handleClick={handleClick} disabled={isDisabled}/>
      <p>Elementos agregados: {context.count}</p>
    </div>
  );
};

export default ProductDetail;
