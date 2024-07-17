import React, { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Search } from "./Search";
import { Svg } from "./Svg";

interface AppHeaderProps {
  onSearch: (query: string) => void;
}

export function AppHeader({ onSearch }: AppHeaderProps) {
  const count = useSelector((state: RootState) => state.cart.counter);

  return (
    <section className="app-header">
      <div className="logo">
        <h1>Here будет Logo</h1>
      </div>
     

      <Search onSearch = {onSearch} />

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
