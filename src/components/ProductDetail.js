// components/ProductDetail.js
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import Image from 'next/image';
import styles from './ProductDetail.module.css';
import Currency from "react-currency-formatter";
import { StarIcon } from "../../icons";

const MAX_RATING = 5;
const MIN_RATING = 1;

const ProductDetail = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const dispatch = useDispatch();
  const [customRating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemTOBasket  = () => {
    const loadingToast = toast.loading("Adding Item...");

    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
      customRating,
    };

    dispatch(addToBasket(product));

    toast.success(`Item Added to Cart`, {
      id: loadingToast,

      position: "bottom-right",
      style: {
        textAlign: "center",
        padding: "18px",
      },
    });
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
        <div className="flex mb-3 space-x-1">
        {Array(customRating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
        <div className="mb-3 font-bold">
        <Currency quantity={product.price} currency="USD" />
      </div>
        <button onClick={addItemTOBasket} className="mt-auto button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
