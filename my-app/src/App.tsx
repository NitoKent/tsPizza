
import { Product } from "./cmps/Product";
import { useProduct } from "./hooks/product";
import { Loader } from "./cmps/Loader";
import { Error } from "./cmps/Error";
import { Filter } from "./cmps/Filter";
import { AppHeader } from "./cmps/AppHeader";

export function App() {

  const { products,loading,error } = useProduct()

  return (
    <section className="main-container">

      <header>
      <AppHeader />
      {loading && <Loader />}
      <Filter />
      {error && <Error error={error} />}
      </header>
       
       <main>

      {products.map((product) => (
        <Product products={product} key={product.id} />
      ))}

       </main>

    </section>
  );
}
