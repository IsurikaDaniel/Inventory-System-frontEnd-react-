import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../common/SideBar.css"; // your custom CSS here

function SideBar() {
  return (
    <div className="sidebar">
      <a
        href="/"
        className="d-block p-3 link-light text-decoration-none"
        title="Brand"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
      >
        <i className="bi bi-bootstrap fs-3"></i>
      </a>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <a href="#" className="nav-link active py-3 border-bottom" title="Home">
            <i className="bi bi-house fs-5"></i>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link py-3 border-bottom link-light" title="Dashboard">
            <i className="bi bi-speedometer2 fs-5"></i>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link py-3 border-bottom link-light" title="Orders">
            <i className="bi bi-table fs-5"></i>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link py-3 border-bottom link-light" title="Products">
            <i className="bi bi-grid fs-5"></i>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link py-3 border-bottom link-light" title="Customers">
            <i className="bi bi-person-circle fs-5"></i>
          </a>
        </li>
      </ul>
      <div className="dropdown border-top">
        <a
          href="#"
          className="d-flex align-items-center justify-content-center p-3 link-light text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="profile"
            width="32"
            height="32"
            className="rounded-circle"
          />
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
