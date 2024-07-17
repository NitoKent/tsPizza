import { Product } from "./cmps/Product";
import { products } from "./data/data";
import { supplements } from "./data/data";
import { useProduct } from "./hooks/product";
import { Loader } from "./cmps/Loader";
import { Error } from "./cmps/Error";
import { Filter } from "./cmps/Filter";
import { AppHeader } from "./cmps/AppHeader";
import { store } from "./store";
import { Provider } from "react-redux";
import { useState } from "react";

export function App() {
  const { loading, error, searchQuery, handleSearch } = useProduct();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleFilter = (category:string) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Все" || product.category.includes(selectedCategory);
    console.log(matchesCategory)
    return matchesSearch && matchesCategory;
  });

  return (
    <Provider store={store}>
      <section className="main-container">
        <header>
          <AppHeader onSearch={handleSearch} />
          {loading && <Loader />}
        </header>

        <Filter onSearch={handleSearch} onFilter={handleFilter} />
        {error && <Error error={error} />}
        <main>
          {filteredProducts.map((product) => (
            <Product products={product} key={product.id} supplements={supplements} />
          ))}
        </main>
      </section>
    </Provider>
  );
}