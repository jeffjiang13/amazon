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
    // Remove the following line as it redeclares the product variable
    // const product = {
    //   id,
    //   title,
    //   category,
    //   description,
    //   image,
    //   price,
    //   rating,
    // };
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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-lg"
    >
      <Toaster />
      <div className="flex">
        <div>
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
            {Array(Math.round(product.rating.rate))
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
    </motion.div>
  );
}

export default ProductDetail;
