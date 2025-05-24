import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../SubComponents/Orders.css";
import SideBar from "../common/SideBar";

function Orders() {

    
    const [orderdata, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5001/api/orders/allOrders').then((response) => {
            setData(response.data);
        })
            .catch(error => {
                console.log('Error fatching data', error);
            })
    }, []);

    return (
        
        <div className="d-flex">
            <SideBar />

            <div className="orderContainer p-3">
                <h2>Orders</h2>

                <table className="styled-table-Order">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderdata.map((Orders) => (
                            <tr>
                                <td>{Orders._id}</td>
                                <td>{Orders.product}</td>
                                <td>{Orders.category}</td>
                                <td>{Orders.price}</td>
                                <td>{Orders.quantity}</td>
                                <td>{Orders.status}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>

        </div>

    )
}

export default Orders;