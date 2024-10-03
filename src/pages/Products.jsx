import { useProducts } from "../context/ProductContext";
import Card from "../components/Card";
import styles from "./Products.module.css";
const Products = () => {
  const products = useProducts();
  console.log(products);
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <p>Loading...</p>}
        {!!products.length &&
          products.map((product) => <Card key={product.id} data={product} />)}
      </div>
    </div>
  );
};

export default Products;
