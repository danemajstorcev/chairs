import { Link } from "react-router-dom";
import { products } from "../library";
import Card from "./Card";

const CardsCont = () => {
  return (
    <div className="CardCont">
      <div className="title">Products</div>
      <div className="products-container">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
          <Card
            id={product.id}
            title={product.title}
            price={product.price}
            desc={product.desc}
            stars={product.stars}
          />
        </Link>
        ))}
      </div>
    </div>
  );
};

export default CardsCont;
