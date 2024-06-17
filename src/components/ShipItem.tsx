import { StarshipType } from "../types/StarshipType";
import { Link } from "react-router-dom";

interface ShipProps {
  name: string;
  model: string;
  ship: StarshipType;
  onSelectShip: (ship: StarshipType) => void;
}

export function ShipItem({ name, model, onSelectShip, ship }: ShipProps) {
  return (
    <li className="w-3/4 cursor-pointer " onClick={() => onSelectShip(ship)}>
      <div className="card bg-zinc-900 shadow-xl rounded-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{model}</p>
          <span>{ship.url}</span>
        </div>
      </div>
    </li>
  );
}
