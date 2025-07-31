import { useFetch } from "../../hooks/useFetch";
import type { ProductCardProps } from "../../types/product";
import { useParams } from "react-router-dom";
import Navbar from "../moleculs/Navbar";
import Button from "../atomic/Button";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ProductDetail = () => {
  
  const { id } = useParams();

  const context = useContext(CartContext);

  const { data, loading, error } = useFetch<ProductCardProps>(
    `https://fakestoreapi.com/products/${id}`
  );

  function handleClick() {
    if (data) {
      context.setCount(context.count + 1);
      context.setCartItems([...context.cartItems, data]);
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
      <Button label="Agregar al carrito" handleClick={handleClick} />
      <p>Elementos agregados: {context.count}</p>
    </div>
  );
};

export default ProductDetail;
