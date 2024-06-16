import { useEffect, useState } from "react";
import { NavTabs, Header, ShipList } from "./components";
import { StarshipType } from "./types/StarshipType";

export default function App() {
  const [list, setList] = useState<StarshipType[] | undefined>();
  const [selectedShip, setSelectedShip] = useState<StarshipType | null>(null);

  function handleSelectShip(ship: StarshipType) {
    setSelectedShip(ship);
    console.log(selectedShip);
  }

  // TODO: Make the function to be called in the context or redux
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://swapi.dev/api/starships/?page=1");
      if (res.ok) {
        const data = await res.json();
        setList(data.results);
      }
    };
    fetchData();
  }, []);

  console.log(list);

  return (
    <div>
      <Header />
      <NavTabs />
      <ShipList list={list} onSelectShip={handleSelectShip} />
    </div>
  );
}
