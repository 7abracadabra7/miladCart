import { useProducts } from "../context/ProductContext";
import Card from "../components/Card";
import styles from "./Products.module.css";
import Loader from "../components/Loader";
import { FaList } from "react-icons/fa";
import { useEffect, useState } from "react";
import { categoryFilter } from "../helper/helper";
import { searchValue } from "../helper/helper";

const Products = () => {
  const products = useProducts();
  const [showProducts, setShowProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  console.log(showProducts);

  useEffect(() => {
    setShowProducts(products);
  }, [products]);

  useEffect(() => {
    let finalResult = categoryFilter(products, query.category);
    finalResult = searchValue(finalResult, query.search);
    setShowProducts(finalResult);
  }, [query]);

  const categoryHandler = (event) => {
    const category = event.target.innerText.toLowerCase();
    if (event.target.tagName !== "LI") return;
    setQuery((q) => ({ ...q, category }));
  };

  const searchHandler = () => {
    setQuery((q) => ({ ...q, search }));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>Click</button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!showProducts.length && <Loader />}
          {showProducts.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div>
          <div>
            <FaList />
            Categories
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Products;
