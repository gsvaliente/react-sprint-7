import { StarshipType } from "../types/StarshipType";
import { Ship } from "./Ship";

interface ShipListProps {
  list: StarshipType[] | undefined;
}

export function ShipList({ list }: ShipListProps) {
  return (
    <div className="mt-5">
      <ul className="flex flex-col items-center align-center space-y-5">
        {list?.map((starship: StarshipType) => (
          <Ship
            // TODO: change the url to an id
            key={starship.url}
            name={starship.name}
            model={starship.model}
          />
        ))}
      </ul>
    </div>
  );
}
