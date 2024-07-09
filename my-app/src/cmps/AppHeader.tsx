import React, { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Svg } from "./Svg";

interface AppHeaderProps {
  onSearch: (query: string) => void;
}

export function AppHeader({ onSearch }: AppHeaderProps) {
  const count = useSelector((state: RootState) => state.cart.counter);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <section className="app-header">
      <div className="logo">
        <h1>Here будет Logo</h1>
      </div>

      <div className="search">
        <form>
          <span className="search-icon">{Svg.searchIcon}</span>
          <input
            id="search-navbar"
            name="txt"
            type="text"
            placeholder="Поиск пиццы..."
            autoComplete="off"
            onChange={handleInputChange}
          />
        </form>
      </div>

      <div className="options">
        <div className="price-basket">
          <p>Корзина</p>
        </div>
        <div className="basket">
          <p>{count}</p>
        </div>
      </div>
    </section>
  );
}
