import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StarshipType } from "./types/StarshipType";
import { Header, ShipList } from "./components";

export default function App() {
  const [list, setList] = useState<StarshipType[] | undefined>();

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
      <div>
        <Link to={"/"}>HOMEPAGE</Link>
        <Link to={"/starships"}>STARSHIPS</Link>
      </div>
      <ShipList list={list} />
    </div>
  );
}
