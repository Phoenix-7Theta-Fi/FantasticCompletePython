import React from 'react';

interface Product {
  id: number;
  name: string;
  imageUrl: string; // URL to product image
  price: number;
  // ... other product properties
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.imageUrl} alt={product.name} width={100} height={100} />
          <h3>{product.name}</h3>
          <p>Price: ${product.price.toFixed(2)}</p>
          {/* Add "Add to Cart" button here later */}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;