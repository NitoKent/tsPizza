import { useState } from "react";
import { IProducts } from "../models";
import { AddModal } from "./AddModal";

interface ProductProps {
  products: IProducts;
}

export function Product({ products }: ProductProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const getDetails = () => {
    setShowDetails(!showDetails);
  };

  const getModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <section className="product-container">
        <img width={"100px"} alt={products.title} src={products.image} />
        <p>{products.title}</p>
        <p style={{ color: "blue" }}>{products.price}$</p>

        <button onClick={getDetails}>
          {!showDetails ? "Show Detail" : "Close Details"}
        </button>
        <button onClick={getModal}>
          {!showModal ? "Show Modal" : "Close Modal"}
        </button>

        {showDetails && (
          <div>
            <p>{products.description}</p>
            <p>{products.rating.rate}</p>
          </div>
        )}
      </section>
      {showModal && (
        <AddModal onClose={getModal} />
      )}
    </>
  );
}

