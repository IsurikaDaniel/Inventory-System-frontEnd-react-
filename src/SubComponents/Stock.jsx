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
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Sales channel</th>
                            <th>Instruction</th>
                            <th>Items</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>Inverter</td>
                            <td>cat1</td>
                            <td>Store name</td>
                            <td>Stock adjustment</td>
                            <td>80/100</td>
                            <td>Completed</td>
                        </tr>
                        <tr classNamelass="active-row">
                            <td>002</td>
                            <td>Inverter</td>
                            <td>cat1</td>
                            <td>Store name</td>
                            <td>Stock adjustment</td>
                            <td>80/100</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>003</td>
                            <td>Inverter</td>
                            <td>cat1</td>
                            <td>Store name</td>
                            <td>Stock adjustment</td>
                            <td>80/100</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>004</td>
                            <td>Inverter</td>
                            <td>cat1</td>
                            <td>Store name</td>
                            <td>Stock adjustment</td>
                            <td>80/100</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>005</td>
                            <td>Inverter</td>
                            <td>cat1</td>
                            <td>Store name</td>
                            <td>Stock adjustment</td>
                            <td>80/100</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>006</td>
                            <td>Inverter</td>
                            <td>cat1</td>
                            <td>Store name</td>
                            <td>Stock adjustment</td>
                            <td>80/100</td>
                            <td>Completed</td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Stock;
