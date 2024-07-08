import { useState } from "react";
import { IProducts } from "../models";
import { products } from "../data/data";
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
        <div className="context-card">
          <img width={"100px"} alt={products.title} src={products.image} />
          <p>{products.title}</p>
          <p className="description">{products.description}</p>
        </div>

        <div className="footer-cards">
          <p > от {products.price}$</p>
          <button onClick={getModal}>
           + Выбрать
          </button>
        </div>
      </section>
      {showModal && <AddModal onClose={getModal} products={products} />}
    </>
  );
}
