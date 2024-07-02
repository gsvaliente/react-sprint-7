import { Link, useLocation } from "react-router-dom";

export function PageNav() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div
      role="tablist"
      className="tabs-bordered tabs-sm mt-10 py-2 text-center"
    >
      <Link
        role="tab"
        to={"/"}
        className={`tab hover:font-bold text-lg ${pathname === "/" ? "tab-active font-bold" : ""}`}
      >
        HOMEPAGE
      </Link>
      <Link
        role="tab"
        to={"/spaceships"}
        className={`tab hover:font-bold text-lg ${pathname === "/starships" ? "tab-active font-bold" : ""}`}
      >
        STARSHIPS
      </Link>
    </div>
  );
}
