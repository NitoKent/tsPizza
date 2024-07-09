import { Product } from "./cmps/Product";
import { products } from "./data/data";
import { useProduct } from "./hooks/product";
import { Loader } from "./cmps/Loader";
import { Error } from "./cmps/Error";
import { Filter } from "./cmps/Filter";
import { AppHeader } from "./cmps/AppHeader";
import { store } from "./store";
import { Provider } from "react-redux";

export function App() {
  const { loading, error, searchQuery, handleSearch } = useProduct();
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Provider store={store}>
      <section className="main-container">
        <header>
          <AppHeader onSearch={handleSearch} />
          {loading && <Loader />}
        </header>

        <Filter />
        {error && <Error error={error} />}
        <main>
          {filteredProducts.map((product) => (
            <Product products={product} key={product.id} />
          ))}
        </main>
      </section>
    </Provider>
  );
}
