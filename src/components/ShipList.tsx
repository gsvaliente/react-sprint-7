import { StarshipType } from "../types/StarshipType";
import { Ship } from "./Ship";

interface ShipListProps {
  list: StarshipType[] | undefined;
}

export function ShipList({ list }: ShipListProps) {
  return (
    <div>
      <ul>
        {list?.map((starship: StarshipType) => (
          <Ship name={starship.name} model={starship.model} />
        ))}
      </ul>
    </div>
  );
}
