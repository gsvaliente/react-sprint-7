import { Header } from "./components/Header";
import { ShipList } from "./components/ShipList";

export default function App() {
  return (
    <div>
      <Header />
      <div>
        <button>HOMEPAGE</button>
        <button>STARSHIPS</button>
      </div>
      <ShipList />
    </div>
  );
}
