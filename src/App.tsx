import { useState } from "react";
import Navbar from "./components/moleculs/Navbar";
import OurProducts from "./components/moleculs/OurProducts";
import ProductCard from "./components/moleculs/ProductCard";
import { useFetch } from "./hooks/useFetch";
import type { ProductCardProps } from "./types/product";


function App() {
  
  const { data, loading, error } = useFetch<ProductCardProps[]>(
    "https://fakestoreapi.com/products"
  );


  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);


  const filteredProducts = selectedCategory
    ? data?.filter((product) => product.category === selectedCategory)
    : data;

  if (loading) return <p>Cargando productos ...</p>;
  if (error) return <p>Hubo error en la peticion de datos</p>;

  return (
    <section className="container mx-auto">
      <Navbar />
      {data && <OurProducts categories={[...new Set(data.map((item) => item.category))].filter((cat): cat is string => typeof cat === "string")} 
                            selectedCategory={selectedCategory} 
                            onCategoryClick={setSelectedCategory}
                            />
      } 
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </section>
  );
}

export default App;
