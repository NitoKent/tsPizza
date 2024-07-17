import React, { ChangeEvent } from "react";
import { Svg } from "./Svg";

interface AppHeaderProps {
    onSearch: (query: string) => void;
  }

export function Search ({ onSearch }: AppHeaderProps) {



    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      onSearch(event.target.value);
    };
     
    return (
        <>
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
        </>
    )
}