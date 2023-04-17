// pages/[pid].js
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
import ProductDetail from '../components/ProductDetail';
import db from '../../firebase';

export async function getServerSideProps(context) {
  const { pid } = context.query;
  const product = await db
    .collection('products')
    .doc(pid)
    .get()
    .then((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

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
