import React, { useEffect, useState } from "react";
import { IProducts } from "../models";
import axios, { AxiosError } from "axios";

export function useProduct() {
    const [products, setProduct] = useState<IProducts[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [ searchQuery, setSearchQuery ] = useState<string>("")
  
    const handleSearch = (query: string) => {
        setSearchQuery(query);
      }

    async function fetchProduct() {
      try {
        setError("");
        setLoading(true);
        const response = await axios.get<IProducts[]>(
          "https://fakestoreapi.com/products?limit=9"
        );
        setProduct(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (e: unknown) {
        const error = e as AxiosError;
        setLoading(false);
        setError(error.message);
      }
    }
  
    useEffect(() => {
      fetchProduct();
    }, []);

    return { products, error, loading, searchQuery, handleSearch}
}