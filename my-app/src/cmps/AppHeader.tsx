import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Search } from "./Search";
import { Svg } from "./Svg";
import { BasketModal } from "./BasketModal";

interface AppHeaderProps {
  onSearch: (query: string) => void;
}

export function AppHeader({ onSearch }: AppHeaderProps) {
  const count = useSelector((state: RootState) => state.cart.counter);
  const [showModal, setShowModal] = useState(false); // Состояние для управления видимостью модального окна

  const getModal = () => {
    setShowModal(!showModal); // Переключение состояния модального окна
  };

  return (
    <section className="app-header">
      <div className="logo">
        <h1>Here будет Logo</h1>
      </div>

      <Search onSearch={onSearch} />

      <button onClick={getModal} className="options">
        <div className="price-basket">
          <p>Корзина</p>
        </div>
        <div className="basket">
          <p>{count}</p>
        </div>
      </button>
      {showModal && <BasketModal onClose={getModal} />} {/* Рендер модального окна при открытии */}
    </section>
  );
}
