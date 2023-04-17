import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

import { StarIcon } from "../../icons";
import { addToBasket } from "../slices/basketSlice";
import { Link } from "react-router-dom";

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

  const addItemTOBasket = () => {
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

    toast.success(`Item Added To Basket`, {
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
      className="relative flex flex-col m-5 bg-white z-30 p-10 hover:shadow-lg"
    >
      <Toaster />
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <div className="items-center flex justify-center">
      <Link to={`/products/${id}`}>

        <Image
          src={image}
          alt={title}
          height={200}
          width={200}
          className="object-contain "
        />
        </Link>
      </div>
      <Link to={`/products/${id}`}>
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      </Link>
      <div className="flex">
        {Array(customRating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="USD" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="w-12"
            src="https://links.papareact.com/fdw"
            alt=""
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <motion.button
        whileHover={{ scale: 0.5 }}
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
