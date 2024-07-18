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
        {["Все", "Мясные", "Острые", "Без мяса", "Закрытые", "Морские"].map(
          (filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "active" : ""}
              onClick={() => handleChangeCategory(filter)}
            >
              {filter}
            </button>
          )
        )}
      </div>
      <div className="sort-by">
       
        <div className="custom-select">
          <select onChange={(e) => handleChangeCategory(e.target.value)}>
            <option value="Все">Все</option>
            <option value="Мясные">Мясные</option>
            <option value="Острые">Острые</option>
            <option value="Без мяса">Без мяса</option>
            <option value="Закрытые">Закрытые</option>
            <option value="Морские">Морские</option>
          </select>
        </div>
      </div>
      <div className="search-filter">
        <Search onSearch={onSearch} />
      </div>
    </section>
  );
}
