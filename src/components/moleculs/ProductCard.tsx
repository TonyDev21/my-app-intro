import { Link } from 'react-router-dom'
import type { ProductCardProps } from '../../types/product'

const ProductCard = ({image, title, price, id, category}: ProductCardProps) => {

  return (
    <Link to={`/products/${id}`} className='w-5/6 mb-8 rounded-2xl h-[700px] md:h-[650px] lg:h-[600px] cursor-auto overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 shadow-2xl'>
      <div className="w-full h-3/4">
        <img src={image} alt="" className='w-full h-full object-fill'/>
      </div>
      <div className="product-information h-1/4 flex flex-col font-roboto text-lg">
        <div className='w-auto h-1/2 flex items-center font-bold'>
          <h3 className='w-3/4 pl-4 lg:text-sm'>{title}</h3>
          <p className='w-1/4 text-center'>${price}</p>
        </div>
        <div className='w-auto h-1/2 flex items-center'>
          <p className='w-3/5 pl-4 text-gray-500'>{category}</p>
          <button className='w-2/5 bg-black p-2 rounded-3xl text-white cursor-pointer text-xl md:text-xl lg:px-0 lg:text-base'>+ Add to Cart</button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
