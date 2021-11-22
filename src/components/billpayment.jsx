import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class BillPayment extends React.Component {
  state = {
    billpayments: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/viewBillPayment")
      .then((response) => {
        console.log(response);
        this.setState({ billpayments: response.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="container mt-3">
        <Link
          to="/bps/add"
          className="btn btn-secondary btn-large mb-1 float-end"
        >
          Add
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Bill ID</th>
              <th>Amount</th>
              <th>Bill Type</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.billpayments.map((bp) => (
              <tr>
                <td>{bp.billId}</td>
                <td>{bp.amount}</td>
                <td>{bp.billtype}</td>
                <td>{bp.paymentDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BillPayment;
