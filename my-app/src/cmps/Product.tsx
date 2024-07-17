import { useState, } from "react";
import { IProducts, Isupplemets } from "../models";
import { products } from "../data/data";
import { AddModal } from "./AddModal";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface ProductProps {
  products: IProducts;
  supplements: Isupplemets[];
}

export function Product({ products,supplements }: ProductProps) {
  const count = useSelector((state: RootState) => state.cart.counter);
  const [showModal, setShowModal] = useState(false);



  const getModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <section className="product-container" onClick={getModal} >
        <div className="context-card">
          <img width={"100px"} alt={products.title} src={products.image} />
          <p>{products.title}</p>
          <p className="description">{products.description}</p>
        </div>

        <div className="footer-cards">
          <p > от {products.price}$</p>
          <button onClick={getModal}>
           +Выбрать
          </button>
        </div>
      </section>
      {showModal && <AddModal onClose={getModal} products={products} supplements={supplements} />}
    </>
  );
}
