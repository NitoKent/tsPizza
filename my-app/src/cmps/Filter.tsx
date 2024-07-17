import React, { useState } from "react";
import { Search } from "./Search";

interface AppHeaderProps {
  onSearch: (query: string) => void;
  onFilter: (category: string) => void;
}

export function Filter({ onSearch, onFilter }: AppHeaderProps) {
  const [activeFilter, setActiveFilter] = useState("Все");

  const handleChangeCategory = (category: string) => {
    setActiveFilter(category);
    onFilter(category);
  };

  return (
    <section className="filter-line">
      <div className="change-by">
        {["Все", "Мясные", "Острые", "Без мяса", "Закрытые", "Морские"].map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? "active" : ""}
            onClick={() => {
              setActiveFilter(filter);
              handleChangeCategory(filter);
            }}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="sort-by">
        <p>Сортировать по:</p>
        <select>
          <option value="">Популярности</option>
        </select>
      </div>
      <div className="search-filter">
        <Search onSearch={onSearch} />
      </div>
    </section>
  );
}
