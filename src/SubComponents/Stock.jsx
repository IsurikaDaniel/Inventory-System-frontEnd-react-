import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../SubComponents/Stock.css";
import SideBar from "../common/SideBar";

function Stock() {

    const [stockdata, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5001/api/allStock').then((response) => {
            setData(response.data);
        })
            .catch(error => {
                console.log('Error fatching data', error);
            })
    }, []);

    return (
        <div className="d-flex">
            <SideBar />

            {/* <div className="topFrame ">
                <h2>In Stock</h2>
            </div> */}

            <div className="stockContainer p-3">

                <div className="topFrame ">
                    <h2>In Stock</h2>
                </div>

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
                        {stockdata.map((Stock) => (
                            <tr>
                                <td>{Stock._id}</td>
                                <td>{Stock.product}</td>
                                <td>{Stock.category}</td>
                                <td>{Stock.sales}</td>
                                <td>{Stock.instruction}</td>
                                <td>{Stock.items}</td>
                                <td>{Stock.status}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Stock;
