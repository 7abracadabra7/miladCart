import { useProducts } from "../context/ProductContext";
import Card from "../components/Card";
import styles from "./Products.module.css";
import Loader from "../components/Loader";
const Products = () => {
  const products = useProducts();
  console.log(products);
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <Loader />}
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
