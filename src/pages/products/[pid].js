import { useRouter } from 'next/router';
import ProductDetail from '../../components/ProductDetail';

export async function getServerSideProps(context) {
  const { pid } = context.query;
  const product = await fetch(
    `https://fakestoreapi.com/products/${pid}`
  ).then((res) => res.json());

  return {
    props: {
      product,
    },
  };
}

function ProductPage({ product }) {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.back()}>Go back</button>
      <ProductDetail product={product} />
    </div>
  );
}

export default ProductPage;
