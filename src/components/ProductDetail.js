// components/ProductDetail.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import Image from 'next/image';
import styles from './ProductDetail.module.css';
import Currency from "react-currency-formatter";
import { StarIcon } from "../../icons";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

function ProductDetail({ product }) {
  const dispatch = useDispatch();
  const loadingToast = toast.loading("Adding Item...");

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
      <div className="flex space-x-4 mb-4">
      <Toaster />

        <Image
          src={product.image}
          alt={product.title}
          width={450}
          height={450}
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
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.9 }}
        onClick={addItemToBasket}
        className="mt-auto button"
      >
        Add to Cart
      </motion.button>
      </div>
    </div>
  );
}

export default ProductDetail;
