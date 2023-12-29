import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/NewSlider">
                Slider
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/MultiPageForm">
                Form
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
                <Link class="nav-link" to="/service">
                  Service
                </Link>
                <div class="dropdown-divider"></div>
                <Link class="nav-link" to="/address">
                  Address
                </Link>
                <Link class="nav-link" to="/search">
                  Search
                </Link>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
              <Link className=" nav-link p-0" to="/search"></Link>
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
