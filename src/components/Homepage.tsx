import { Header } from "./Header";
import { Link } from "react-router-dom";

export function Homepage() {
  return (
    <div>
      <Header />
      <div>
        <button>HOMEPAGE</button>
        <Link to={"/starships"}>STARSHIPS</Link>
      </div>
      <h1>Homepage</h1>
    </div>
  );
}
