import { Monster } from "../../App";

import Card from "../Card/Card";

import "./CardList.css";

type CartListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CartListProps) => (
  <div className="card-list">
    {monsters.map((monster) => (
      <Card monster={monster} key={monster.id} />
    ))}
  </div>
);

export default CardList;
