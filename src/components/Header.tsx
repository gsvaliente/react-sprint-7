import logo from "../assets/Star Wars 4.svg";

export function Header() {
  return (
    <header className="navbar bg-base-100 pt-9">
      <div className="navbar-start"></div>
      <div className="navbar-center"></div>
      <img src={logo} alt="Star Wars logo" className="bg-none h-36" />
      <div className="navbar-end">
        <button className="btn btn-ghost ">
          <p>Sign In</p>
        </button>
        <button className="btn btn-ghost ">
          <div className="indicator">
            <p>Register</p>
          </div>
        </button>
      </div>
    </header>
  );
}
