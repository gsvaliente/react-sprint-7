import { StarshipType } from "../types/StarshipType";
import { Loading } from "./Loading";
import { ShipItem } from "./ShipItem";

interface ShipListProps {
  list: StarshipType[] | undefined;
  isLoading: boolean;
  onSelectShip: (ship: StarshipType) => void;
}

export function ShipList({ list, onSelectShip, isLoading }: ShipListProps) {
  return (
    <div className="mt-5">
      <ul className="flex flex-col items-center align-center space-y-5">
        {isLoading ? (
          <Loading />
        ) : (
          list?.map((starship: StarshipType) => (
            <ShipItem
              // TODO: change the url to an id
              key={starship.url}
              name={starship.name}
              model={starship.model}
              onSelectShip={onSelectShip}
              ship={starship}
            />
          ))
        )}
      </ul>
    </div>
  );
}
