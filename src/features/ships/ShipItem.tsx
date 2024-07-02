import { Link } from 'react-router-dom';
import { getIdFromUrl } from '../../helpers/getIdFromUrl';
import type { StarshipType } from '../../types/Ship.interface';

interface ShipItemProps {
  ship: StarshipType;
}

export function ShipItem({ ship }: ShipItemProps) {
  const id = getIdFromUrl(ship.url);

  return (
    <li className='w-3/4 cursor-pointer'>
      <Link
        to={`${id}`}
        className='w-3/4 cursor-pointer'
      >
        <div className='card bg-zinc-900 shadow-xl rounded-xl'>
          <div className='card-body'>
            <h2 className='card-title uppercase'>{ship.name}</h2>
            <p>{ship.model}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
