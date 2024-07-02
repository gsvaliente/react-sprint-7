import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import { ShipItem } from "./ShipItem";
import { ShipsState, findShips, nextPage, prevPage } from "./shipsSlice";
import { Loader } from "../ui/Loader";

const API_URL = "https://swapi.dev/api/starships/?page=";

function ShipList() {
  const dispatch = useAppDispatch();
  const { shipList, isLoading, isError, page }: ShipsState = useAppSelector(
    (shop) => shop.ships,
  );

  useEffect(() => {
    dispatch(findShips(`${API_URL}${page}`));
  }, [dispatch, page]);

  return (
    <>
      <ul>
        {isError && <p>{isError}</p>}
        {isLoading ? (
          <Loader />
        ) : (
          shipList?.map((ship) => <ShipItem key={ship.name} ship={ship} />)
        )}
      </ul>
      {page > 1 && <button onClick={() => dispatch(prevPage())}>prev</button>}
      {page < 4 && <button onClick={() => dispatch(nextPage())}>next</button>}
    </>
  );
}
export default ShipList;
