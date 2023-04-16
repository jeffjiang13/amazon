import { StarIcon } from "../../icons";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import Link from "next/link";
import styles from './Product.module.css';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = (e) => {
    e.stopPropagation();
    dispatch(
      addToBasket({
        id,
        title,
        price,
        rating,
        description,
        category,
        image,
        hasPrime,
      })
    );
  };

// ...
return (
  <Link href={`/products/${id}`}>
    <a>
      <div className={`${styles.productCard} relative flex flex-col m-5 bg-white z-30 p-10`}>
        <div className={styles.productContainer}>
          <p className={`${styles.category} absolute top-2 right-2 text-xs italic text-gray-400`}>
            {category}
          </p>
          <div className="flex flex-col items-start">

          <Image src={image} height={200} width={200} objectFit="contain" />
          <h4 className={`${styles.title} my-3`}>{title}</h4>
          <div className={`${styles.rating} flex`}>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon key={i} className="h-5 text-yellow-500" />
              ))}
          </div>
          <p className={`${styles.description} text-xs mt-2 mb-2 line-clamp-2`}>{description}</p>
          <div className={`${styles.price} mb-5`}>
            <Currency quantity={price} currency="USD" />
          </div>
          {hasPrime && (
            <div className={`${styles.prime} flex items-center space-x-2 -mt-5`}>
              <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
              <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
            </div>
          )}
        </div>
        </div>
        <div className={`${styles.buttonContainer} mt-auto`}>
          <button onClick={addItemToBasket} className="button w-full">
            Add to Basket
          </button>
        </div>
      </div>
    </a>
  </Link>
);
// ...

}

export default Product;
