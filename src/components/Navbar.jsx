import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const [active, setActive] = useState("/");



  useEffect(() => {
    setActive(location.pathname);
  }, [location]);



  // ****************************login part***********************************************************


  // *******************************************************responsive part************************************

  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-home">
          <Link
            to="/"
            className={active == "/" ? "active link" : "Notactive link"}
          >
            HOME
          </Link>
        </div>
        <div className="navbar-other-product">
          <div className="navbar-products">
            
          </div>
        </div>
      </div>

      {/* ************************************responsive nvbar************************************** */}

      <div className="navbar-mobile">
        <h3 className="logo">
          <Link to="/" className="home">
            HOME
          </Link>
        </h3>
        <ul className={"nav-links"}>
          <Link to="/accessories" className="home">
            <li>ACCESSORIES</li>
          </Link>
        </ul>

        <button className="mobile-menu-icons">
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
