
import { Product } from "./cmps/Product";
import { useProduct } from "./hooks/product";
import { Loader } from "./cmps/Loader";
import { Error } from "./cmps/Error";

export function App() {

  const { products,loading,error } = useProduct()

  return (
    <section className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}

      {products.map((product) => (
        <Product products={product} key={product.id} />
      ))}
    </section>
  );
}
