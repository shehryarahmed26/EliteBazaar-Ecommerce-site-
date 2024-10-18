import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BarLoader } from "react-spinners";
import ProductCard from './ProductCard';


const Searchproducts = () => {
    const [loading, setloading] = useState(true)
    const [query, setquery] = useState('')
    const {id} = useParams()
    useEffect(() => {
        setloading(true)
        fetch(`https://dummyjson.com/products/search?q=${id}`)
        .then((res) => res.json())
        .then((res) => {
          setquery(res.products);
          setloading(false)
          console.log(query);
          
        });
    }, [id]);
    window.scroll(0, 0)

  return (
    <div className='min-h-screen'>
        {loading ?
        <BarLoader/> :
        <div className='flex flex-wrap justify-center'>
            {
                query.map((item) => (
                    <ProductCard item={item} />
                ))
            }
        </div>
        }
    </div>
  )
}

export default Searchproducts