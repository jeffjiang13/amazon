import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Link from "next/link";

import { addToBasket } from "../slices/basketSlice";

export default function Product({ data }) {
  const { id, title, category, description, image, price, rating } = data;

  const [hasPrime] = useState(Math.random() < 0.5);

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
    <article
      className="flex flex-col bg-white shadow-xl p-8 relative h-full"
      key={id}
    >
      <small className="absolute right-2 top-2 opacity-60 text-sm">
        {category}
      </small>
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={title}
          className="h-52 w-52 object-contain mb-4 mx-auto"
        />
      </Link>
      <Link to={`/products/${id}`}>
        <h2 className="font-bold text-lg mb-4">{title}</h2>
      </Link>
      <p className="flex mb-3 space-x-1">
        {Array(Math.round(rating?.rate))
          .fill(0)
          .map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
      </p>
      <p className="line-clamp-3 text-xs mb-3">{description}</p>
      <p className="mb-3 font-bold">{"$" + price}</p>
      {hasPrime && (
        <div className="flex items-center mt-auto">
          <img src="https://links.papareact.com/fdw" alt="Prime" className="w-12 h-12 mr-2" />
          <small className="opacity-70">FREE Nex-day delivery!</small>
        </div>
      )}
      <button className="mt-auto btn" onClick={addItemToBasket}>
        Add To Basket
      </button>
    </article>
  );
}
