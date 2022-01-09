import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import { Product } from './Product';
import axios from 'axios';
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;
export const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(
        cat
          ? `http://localhost:8000/api/products?categories=${cat}`
          : 'http://localhost:8000/api/products'
      );
      setProducts(res.data);
    };
    fetchProducts();
  }, [cat]);
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter(item =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters, products]);
  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
      setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);
  return (
    <Container>
      {cat
        ? filteredProducts.map(item => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map(item => <Product item={item} key={item.id} />)}
    </Container>
  );
};
