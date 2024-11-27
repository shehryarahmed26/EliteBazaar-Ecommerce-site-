import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Pagination } from 'antd';
import { BarLoader } from "react-spinners";
import Banner from "./Banner";

const Products = () => {
  const [products, setproducts] = useState([]);
  const [categories, setcategories] = useState([]);
  const [loading, setloading] = useState(true)
  const [categoryitem, setcategoryitem] = useState('All')
  const [skip, setskip] = useState(60)
  const [limit, setlimit] = useState(20)
  const categoriesarr = [
    {
      img: '/Images/smartphones.png',
      slug: 'SmartPhones'
    },
    {
      img: '/Images/beauty.png',
      slug: 'Beauty'
    },
    {
      img: '/Images/vehicle.png',
      slug: 'Vehicle'
    },
    {
      img: '/Images/bikes.png',
      slug: 'Motorcycle'
    },
    {
      img: '/Images/furniture.png',
      slug: 'Furniture'
    },
    {
      img: '/Images/electronics.png',
      slug: 'Laptops'
    },
  ]
  
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
  window.scroll(0, 0)
  // console.log(categories);

  return (
    <div className="min-h-screen" >
    {loading ? 
     <div className="w-full h-screen flex justify-center items-center -translate-y-36"><BarLoader color="#1aafc2" className="" /></div> :
     <div>
       {/* <Banner/> */}
      {/* <div className="flex flex-col justify-center flex-wrap mb-8 mx-5">
        <h3 className="text-3xl my-5 font-semibold">Top Categories</h3>
      <div className="flex w-full justify-center gap-2">

      {
        categoriesarr.map((category) => (
          // <button onClick={() => setcategoryitem(category.slug)} className={`${categoryitem === category.slug ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'} px-3 rounded mx-1 my-1 text-center text-[10px] md:text-lg `}>{category.name}</button>
          <div>
            <img onClick={() => setcategoryitem(category.slug)} className="w-[50px] md:w-[80px] mx-1 md:mx-10 my-4" src={`${category.img}`} alt="" />
          </div>
           ))
          }
          </div>
     </div> */}
     <h3 className="text-4xl my-5 font-semibold text-center"> Top Products</h3>

     <div className="flex w-full flex-wrap px-4 justify-center gap-5 gap-y-10 md:px-8">
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
