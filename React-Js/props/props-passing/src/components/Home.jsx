import React from "react";
import { Outlet, Link } from "react-dom";
import { BrowserRouter as Router } from "react-dom";
const Home = () => {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </Router>

      <Outlet />
    </>
  );
};

export default Home;
