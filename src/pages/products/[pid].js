import { useRouter } from 'next/router';
import Header from '../../components/Header';
import ProductDetail from '../../components/ProductDetail';
import { FaArrowLeft } from "react-icons/fa";

export async function getServerSideProps(context) {
  const id = context.query.id;
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data with status code: ${res.status}`);
    }
    const product = await res.json();
    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error(`Error fetching product data: ${error.message}`);
    return {
      notFound: true, // This will return a 404 page when there's an error
    };
  }
}


function ProductPage({ product }) {
  const router = useRouter();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto py-6">
        <button className="mt-auto button" onClick={() => router.back()}>
        <FaArrowLeft />
          </button>
        <ProductDetail product={product} />
      </div>
    </div>
  );
}

export default ProductPage;
