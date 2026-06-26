import { useEffect, useState } from "react";import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        count={filteredProducts.length}
      />

      <div className="products-container">
        {filteredProducts.length === 0 ? (
          <div className="no-results">
            <span className="no-results-icon">🔎</span>
            No products found. Try a different search!
          </div>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </>
  );
}

export default Home;