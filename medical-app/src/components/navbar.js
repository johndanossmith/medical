import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const openUrl = (url) => {
    window.open(url, "_self");
  };
  return (
    <div className="navbar bg-navbar sticky top-0 z-10">
      <div className="navbar-start">
        <img src={logo} alt="logo" />
        <button className="btn btn-ghost normal-case text-xl text-nav">
          Medical Consultant
        </button>
      </div>
      <div className="navbar-end px-12">
        <button
          onClick={() => window.open("https://generativeai.net/", "_self")}
          className="btn btn-ghost normal-case text-xl text-nav"
        >
          Generative AI
        </button>
        <Link to="/signin">
          <button className="btn btn-ghost normal-case text-xl text-nav">
            Chatting
          </button>
        </Link>

        <button
          onClick={() => openUrl("https://yoga-fit.cmsmasters.net/")}
          className="btn btn-ghost normal-case text-xl text-nav"
        >
          Yoga & Diet
        </button>
        <Link to="/">
          <button className="btn btn-success normal-case">Log Out</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
