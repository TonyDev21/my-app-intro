import { RiDeleteBinLine } from "react-icons/ri";
import type { ProductCardProps } from "../../types/product";
import ButtonChildren from "../atomic/ButtonChildren";

interface ShoppingCartProps extends ProductCardProps{
    onClick: (id:number) => void;
}
const ShoppingCart = ({
  id,
  image,
  title,
  description,
  price,
  onClick
}: ShoppingCartProps) => {
  return (
    <div className="flex" key={id}>
      <div>
        <img src={image} alt={title} className="max-w-[150px]" />
      </div>
      <div className="flex flex-col justify-center bg-amber-200 space-y-2">
        <h4 className="font-bold">{title}</h4>
        <p>{description}</p>
        <span className="font-bold">${price}</span>
      </div>
      <div className="flex justify-center items-center bg-sky-300 px-4">
        <button className="w-10 bg-gray-400 text-3xl rounded-xl cursor-pointer">
          -
        </button>
        <span className="w-10 text-center text-2xl">1</span>
        <button className="w-10 bg-gray-400 text-3xl rounded-xl cursor-pointe">
          +
        </button>
      </div>
      <div className="flex">
        <ButtonChildren handleClick={() => onClick(id)}>
          <RiDeleteBinLine className="text-3xl text-gray-400" />
        </ButtonChildren>
      </div>
    </div>
  );
};

export default ShoppingCart;
