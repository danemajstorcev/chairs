import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../library";

const CardDetail = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Product ID not found in URL</div>;
  }

  const product = products.find((product) => product.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  const renderStars = (stars: number) => {
    return Array.from({ length: stars }, (_, index) => (
      <i key={index} className="fas fa-star" />
    ));
  };

  return (
    <div className="CardDetail">
      <div className="Banner">
        <h1>{product.title}</h1>
      </div>
      <div className="img-and-text">
        <img
          className="img"
          src={`/img/${product.id}.jpg`}
          alt={product.title}
        />
        <div className="info-cont">
          <div className="price">{product.price} USD</div>
          <div className="title">{product.title}</div>
          <div className="stars">{renderStars(product.stars)}</div>
          <p>{product.desc}</p>
          <button className="button">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
