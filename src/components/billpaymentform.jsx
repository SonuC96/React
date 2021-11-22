import axios from "axios";
import React, { Component } from "react";
class BillPaymentForm extends React.Component {
  state = {
    billpayment: {
      balance: "",
      billtype: "",
      amount: "",
      paymentDate: "",
      role: "",
    },
  };
  handleChange = (event) => {
    const billpayment = { ...this.state.billpayment };
    billpayment[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ billpayment: billpayment });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const billpayment = {
      amount: this.state.billpayment.amount,
      billId: 0,
      billtype: this.state.billpayment.billtype,
      paymentDate: this.state.billpayment.paymentDate,

      wallet: {
        balance: this.state.billpayment.balance,
        walletId: 0,
      },
      role: this.state.billpayment.role,
    };
    axios
      .post("http://localhost:8080/api/addBillPayment", billpayment)
      .then((res) => {
        this.props.history.push("/bp");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <h3>Payment</h3>
        <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3">
          <div className="mb-3">
            <label for="exampleInputBalance" className="form-label">
              Balance
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputBalance"
              value={this.state.billpayment.balance}
              name="balance"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputBillType" className="form-label">
              Bill Type
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputBillType"
              aria-describedby="emailHelp"
              value={this.state.billpayment.billtype}
              name="billtype"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputAmount" className="form-label">
              Amount
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputAmount"
              aria-describedby="emailHelp"
              value={this.state.billpayment.amount}
              name="amount"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPaymentDate" className="form-label">
              Payment Date
            </label>
            <input
              type="date"
              className="form-control"
              id="exampleInputPaymentDate"
              value={this.state.billpayment.paymentDate}
              name="paymentDate"
              onChange={this.handleChange}
            />
          </div>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={this.state.billpayment.role}
            name="role"
            onChange={this.handleChange}
          >
            <option selected>Select Role</option>
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default BillPaymentForm;
