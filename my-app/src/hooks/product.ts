// hooks/product.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
import { IProducts } from '../models';

export const useProduct = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<IProducts[]>('/post');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return { products, loading, error, searchQuery, handleSearch };
};
