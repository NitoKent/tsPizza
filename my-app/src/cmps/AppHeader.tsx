import { Svg } from "./Svg";
import { ChangeEvent } from "react";

interface AppHeaderProps {
    onSearch: (query: string) => void;
  }

export function AppHeader({ onSearch }: AppHeaderProps) {
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
            onChange={handleInputChange}
            //   className={searchInputVisible ? "visible" : ""}
            autoComplete="off"
          />
        </form>
      </div>

      <div className="options">
        <div className="price-basket">
          <p>Корзина</p>
        </div>
        <div className="basket">
          <p></p>
        </div>
      </div>
    </section>
  );
}
