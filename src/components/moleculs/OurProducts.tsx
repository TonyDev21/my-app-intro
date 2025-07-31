
interface OurProductsProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryClick: (category: string | null) => void;
}

const OurProducts = ({ categories, selectedCategory, onCategoryClick }: OurProductsProps) => {
  
  
  return (
    <section className="flex flex-col justify-center items-center h-64 mb-20 space-y-5">
      <h3 className="text-4xl lg:text-5xl font-bold">Our Products</h3>
      <p className="text-lg lg:text-2xl text-center">
        Discover our carefully curated collection of premium products designed
        for modern living.
      </p>
      <div className="flex gap-4">
        {categories.map((category) => (
        <button
          key={category}
          className={`px-2 py-1 lg:px-4 lg:py-2 rounded-3xl text-lg lg:text-2xl cursor-pointer ${
            selectedCategory === category
              ? "bg-blue-700 text-white font-bold"
              : "bg-black text-white"
          }`}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </button>
      ))}
      {selectedCategory && (
        <button
          className="px-2 py-1 lg:px-4 lg:py-2 rounded-3xl text-lg lg:text-2xl bg-red-600 text-white font-bold"
          onClick={() => onCategoryClick(null)}
        >
          Reset
        </button>
      )}
      </div>
    </section>
  );
};

export default OurProducts;
