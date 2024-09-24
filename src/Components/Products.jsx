import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Pagination } from 'antd';

const Products = () => {
  const [products, setproducts] = useState([]);
  const [categories, setcategories] = useState([]);
  const [loading, setloading] = useState(true)
  const [categoryitem, setcategoryitem] = useState('All')
  const [skip, setskip] = useState(0)
  const [limit, setlimit] = useState(20)
  
  useEffect(() => {
    setloading(true)
    const url = categoryitem === 'All' ? 
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,thumbnail` :
    `https://dummyjson.com/products/category/${categoryitem}` 
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setproducts(res.products);
        
      });
      setloading(false)
    }, [categoryitem, skip]);
    
    useEffect(() => {
      setloading(true)
      fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => {
        setcategories(res);
        setloading(false)
      });
  }, []);
  return (
    <div>
     {loading ? 
     <h1>Loading...</h1> :
     <div>
      <div className="flex justify-center flex-wrap mb-8 mx-5">
      <button onClick={() => setcategoryitem('All')} className={`${categoryitem === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'} px-3 rounded mx-1 my-1 text-center text-[8px] md:text-lg`}>All</button>

      {
        categories.map((category) => (
          <button onClick={() => setcategoryitem(category.slug)} className={`${categoryitem === category.slug ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'} px-3 rounded mx-1 my-1 text-center text-[8px] md:text-lg `}>{category.name}</button>
           ))
      }
     </div>
     
     <div className="flex w-full flex-wrap justify-center gap-5 px-8">
     { products.map((item) => (
      <ProductCard key={item.id} item={item}/>
     ))}
     </div> {
      categoryitem === 'All' ? 
       <Pagination onChange={(num) => setskip((num - 1) * 20)
       } className="my-8" align  ="center" defaultCurrent={1} total={194} />
       : ''
     }
     </div>
     }
    </div>
  );
};
export default Products;
