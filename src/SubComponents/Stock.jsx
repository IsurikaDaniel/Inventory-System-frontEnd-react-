import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../SubComponents/Stock.css"; // Confirm path is correct
import SideBar from "../common/SideBar"; // Adjusted path if needed

function Stock() {
  return (
    <div className="d-flex">
      <SideBar />
      <div className="stockContainer p-3">
        hi
      </div>
    </div>
  );
}

export default Stock;
