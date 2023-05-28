import React from "react";
import "./Header.scss";
import { BiLogIn } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { NavLink, Link, useNavigate } from "react-router-dom";

const activeLink = ({ isActive }) => (isActive ? "active" : "");
function Header() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <header className="header">
      <nav>
        <div className="logo" onClick={goHome}>
          <BiLogIn size={35} />
          <span>AUTH:D</span>
        </div>
        <ul className="home-links">
          <li className="--flex-center">
            <FaUserCircle size={20} />
            <p className="--color-white">Hi, Danny</p>
          </li>
          <li>
            <button className="--btn --btn-primary">
              {" "}
              <Link to={"/login"}>Login</Link>{" "}
            </button>
          </li>
          <li>
            {" "}
            <NavLink to={"/profile"} className={activeLink}>
              Profile
            </NavLink>{" "}
          </li>
          <button className="--btn --btn-secondary">Logout </button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
