import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import ProductList from '../../components/patient/ProductList'; // Component to display products

const Marketplace: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [products, setProducts] = useState([]); // State to store product data

  useEffect(() => {
    // Fetch product data from your API or database
    const fetchProducts = async () => {
      try {
        // Replace this with your actual data fetching logic 
        const res = await fetch('/api/products'); // Example: Fetching from a local API route
        const data = await res.json();
        setProducts(data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); 

  if (!session) {
    router.push('/');
    return null;
  }

  return (
    <div>
      <h2>Product Marketplace</h2>
      <ProductList products={products} /> {/* Pass product data to the component */}
    </div>
  );
};

export default Marketplace;