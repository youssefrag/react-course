import Card from "../Card/Card";

import "./CardList.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => (
      <Card monster={monster} key={monster.id} />
    ))}
  </div>
);

export default CardList;
