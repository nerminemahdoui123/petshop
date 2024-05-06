import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import { HiChevronDoubleRight } from 'react-icons/hi';

const ListView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="flex mb-8">
          {product.thumbnail && (
            <img
            className="w-[300px] h-[200px] object-contain mb-4 rounded"
         
          
            src={product.thumbnail} // Utilisez l'URL absolue de l'image directement
            alt={product.name}
          />
          
          
          )}
          <div className="flex flex-col">
            <h3 className="mb-2 text-lg font-bold tracking-widest">{product.name}</h3>
            <h4 className="mb-2 text-secondary-100 italic font-bold">{formatPrice(product.price)}</h4>
            <p className="max-w-2xl mb-3 text-gray-500">{product.description.substring(0, 150)}...</p>
            <Link
              to={`/products/${product.id}`}
              className="text-sm uppercase bg-secondary-100 text-white rounded-md font-bold py-1 px-2 ml-auto shadow-lg"
            >
              Details
              <span className="inline-block ml-1"><HiChevronDoubleRight /></span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListView;

