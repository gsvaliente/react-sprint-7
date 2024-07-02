import { Link } from 'react-router-dom';
import { getIdFromUrl } from '../../helpers/getIdFromUrl';
import type { StarshipType } from '../../types/Ship.interface';

interface ShipItemProps {
  ship: StarshipType;
}

export function ShipItem({ ship }: ShipItemProps) {
  const id = getIdFromUrl(ship.url);
  console.log(id);
  return (
    <li>
      <Link to={`${id}`}>
        <h4>{ship.name}</h4>
        <p>{ship.model}</p>
      </Link>
    </li>
  );
}
