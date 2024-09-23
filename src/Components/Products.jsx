import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Category from "./Category";
const Products = () => {
  const [products, setproducts] = useState([]);
  const [categories, setcategories] = useState([]);
  const [loading, setloading] = useState(true)
  const [categoryitem, setcategoryitem] = useState('All')
  console.log(categoryitem);
  
  useEffect(() => {
    setloading(true)
    const url = categoryitem === 'All' ? 
    'https://dummyjson.com/products' :
    `https://dummyjson.com/products/category/${categoryitem}` 
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setproducts(res.products);
      });
      setloading(false)
    }, [categoryitem]);
    
    useEffect(() => {
      setloading(true)
      fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => {
        setcategories(res);
        console.log(categories);
        setloading(false)
      });
  }, []);
  return (
    <div>
     {loading ? 
     <h1>Loading...</h1> :
     <div>
      <div className="flex justify-center flex-wrap mb-8">
      <button onClick={() => setcategoryitem('All')} className={`${categoryitem === 'All' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-black'} px-3 rounded mx-1 my-1 text-center`}>All</button>

      {
        categories.map((category) => (
          <button onClick={() => setcategoryitem(category.slug)} className={`${categoryitem === category.slug ? 'bg-purple-600 text-white' : 'bg-gray-200 text-black'} px-3 rounded mx-1 my-1 text-center`}>{category.name}</button>
           ))
      }
     </div>
     
     <div className="flex w-full flex-wrap mx-10">
     { products.map((item) => (
      <ProductCard key={item.id} item={item}/>
     ))}
     </div>
     </div>
     }
    </div>
  );
};
export default Products;
