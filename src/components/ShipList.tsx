import { StarshipType } from "../types/StarshipType";
import { ShipItem } from "./ShipItem";

interface ShipListProps {
  list: StarshipType[] | undefined;
  onSelectShip: (ship: StarshipType) => void;
}

export function ShipList({ list, onSelectShip }: ShipListProps) {
  return (
    <div className="mt-5">
      <ul className="flex flex-col items-center align-center space-y-5">
        {list?.map((starship: StarshipType) => (
          <ShipItem
            // TODO: change the url to an id
            key={starship.url}
            name={starship.name}
            model={starship.model}
            onSelectShip={onSelectShip}
            ship={starship}
          />
        ))}
      </ul>
    </div>
  );
}
