import products from "../library";

export interface CardProps {
  id: number;
  title: string;
  price: string;
  desc?: string;
  stars?: number;
}

const Card = ({ id, title, price, desc, stars }: CardProps) => {
  return (
    <div className="Card">
      <img className="img" src={`img/${id}.jpg`} alt={title} />
      <h2>{title}</h2>
      <div className="price">{price} USD</div>
      <div className="stars">
        {Array.from({ length: stars || 0 }, (_, index) => (
          <i key={index} className="fas fa-star"></i>
        ))}
      </div>
    </div>
  );
};

export default Card;
