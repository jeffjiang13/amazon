// components/ProductDetail.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import Image from 'next/image';
import styles from './ProductDetail.module.css';
import Currency from "react-currency-formatter";
import { FaStar } from 'react-icons/fa';

function ProductDetail({ product }) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      category,
      description,
      image,
      price,
      rating,
    };
    dispatch(addToBasket(product));
  };



  return (
    <div className="h-screen m-8">
      <div className="flex space-x-4 mb-4 items-center">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          objectFit="contain"
        />
      </div>
      <div className={styles.productDetail__info}>
      <h4 className="font-bold text-lg mb-4">{product.title}</h4>
        <p>{product.description}</p>
        <div className="flex items-center mb-2">
          {Array(Math.round(product.rating.rate))
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
        </div>
        <div className="mb-3 font-bold">
        <Currency quantity={product.price} currency="USD" />
      </div>
        <button onClick={addItemToBasket} className="mt-auto button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
