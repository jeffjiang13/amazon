import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import Link from "next/link";

import { StarIcon } from "../../icons";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({
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
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING)) + MIN_RATING
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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col bg-white shadow-xl p-8 relative h-full"
    >
      <Toaster />
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <div className="items-center flex justify-center">
      <Link href={`/products/${id}`}>

        <Image
          src={image}
          alt={title}
          height={200}
          width={200}
          className="h-52 w-52 object-contain mb-4 mx-auto"
        />
        </Link>
      </div>
      <Link href={`/products/${id}`}>
      <h4 className="font-bold text-lg mb-4">{title}</h4>
      </Link>
      <div className="flex mb-3 space-x-1">
        {Array(customRating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="line-clamp-3 text-xs mb-3">{description}</p>
      <div className="mb-3 font-bold">
        <Currency quantity={price} currency="USD" />
      </div>
      {hasPrime && (
        <div className="flex items-center mt-auto">
          <img
            className="w-12"
            src="https://links.papareact.com/fdw"
            alt=""
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.9 }}
        onClick={addItemTOBasket}
        className="mt-auto button"
      >
        Add to Cart
      </motion.button>
    </motion.div>
  );
};

export default Product;
