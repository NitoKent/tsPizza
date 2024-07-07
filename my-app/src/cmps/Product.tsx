import { useState } from "react";
import { IProducts } from "../models";

interface ProductProps {
  products: IProducts;
}

export function Product({ products }: ProductProps) {
  const [showDetails, setShowDetails] = useState(false);
  const getDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section className="">
      <img width={"100px"} alt={products.title} src={products.image}></img>
      <p>{products.title}</p>
      <p style={{color:"blue"}}>{products.price}</p>

      <button onClick={getDetails}>
        {!showDetails ? "Show Detail" : "Close Details"}
      </button>

      {showDetails && (
        <div>
          <p>{products.description}</p>
          <p>{products.rating.rate}</p>
        </div>
      )}
    </section>
  );
}
