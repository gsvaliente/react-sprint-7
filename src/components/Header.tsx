import logo2 from "../assets/sw logo.png";

export function Header() {
  return (
    <header className="navbar bg-base-100 pt-10">
      <div className="navbar-start"></div>
      <div className="navbar-center"></div>
      <img src={logo2} alt="Star Wars logo" className="h-32" />
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
