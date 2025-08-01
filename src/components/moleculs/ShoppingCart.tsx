import { RiDeleteBinLine } from "react-icons/ri";
import type { ProductCardProps } from "../../types/product";
import ButtonChildren from "../atomic/ButtonChildren";

interface ShoppingCartProps extends ProductCardProps {
  onRemove: (id: number) => void;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
}
const ShoppingCart = ({
  id,
  image,
  title,
  description,
  price,
  quantity,
  onRemove,
  onIncrement,
  onDecrement
}: ShoppingCartProps) => {
  return (
    <div className="flex flex-row mb-6 h-auto md:h-46" key={id}>
      <div className="basis-1/4 md:basis-2/8">
        <img src={image} alt={title} className="h-full w-full object-contain" />
      </div>
      <div className="flex flex-col basis-1/4 md:basis-3/4 justify-center  space-y-2 p-2">
        <h4 className="font-bold">{title}</h4>
        <p>{description}</p>
        <span className="font-bold text-2xl">${(price * (quantity || 1)).toFixed(2)}</span>
      </div>
      <div className="flex basis-1/4 md:basis-1/8 justify-center items-center px-4">
        <button onClick={() => onDecrement(id)} className="w-10 text-5xl rounded-xl cursor-pointer">-</button>
        <span className="w-10 text-center text-2xl">{quantity || 1}</span>
        <button   onClick={() => onIncrement(id)} className="w-10 text-3xl rounded-xl cursor-pointer">+</button>
      </div>
      <div className="flex basis-1/4 md:basis-1/8 justify-center items-center">
        <ButtonChildren handleClick={() => onRemove(id)}>
          <RiDeleteBinLine className="text-3xl text-gray-400" />
        </ButtonChildren>
      </div>
    </div>
  );
};

export default ShoppingCart;
