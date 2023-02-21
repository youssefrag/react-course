import { Monster } from "../../App";

import "./Card.css";

type CardProps = {
  monster: Monster;
};

const Card = ({ monster: { id, name, email } }: CardProps) => (
  <div className="card-container">
    <img
      alt={`monster ${name}`}
      src={`https://robohash.org/${id}?set=set2&size=180x180`}
    />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

export default Card;
