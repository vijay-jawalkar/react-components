import { useState, useEffect } from "react";

import { Card } from "./components/Card";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    }
    fetchProducts();
  }, []);

  function previous() {
    setPage(page - 1);
  }

  function next() {
    setPage(page + 1);
  }

  return (
    <div className="App">
      <h1>Product List</h1>

      <div className="container">
        {products.length
          ? products.slice(page * 10 - 10, page * 10).map((product) => {
              return <Card key={product.id} product={product} />;
            })
          : "Loading..."}
      </div>

      <div className="pagination">
        {page >= 2 && <span onClick={previous}> ◀ </span>}

        {[...Array(products.length / 10)].map((_, index) => {
          return (
            <span
              className={`page ${
                page === index + 1 ? "selected" : "not_selected"
              }`}
              onClick={() => setPage(index + 1)}
            >
              {" "}
              {index + 1}{" "}
            </span>
          );
        })}

        {page <= 2 && <span onClick={next}> ▶ </span>}
      </div>
    </div>
  );
}
