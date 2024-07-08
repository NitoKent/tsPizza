import { useState } from "react";

export function Filter() {
  const [activeFilter, setActiveFilter] = useState("Все");

  return (
    <section className="filter-line">
      <div className="change-by">
        {["Все", "Мясные", "Острые"].map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? "active" : ""}
            onClick={() => setActiveFilter(filter)}
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
    </section>
  );
}
