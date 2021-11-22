import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
class Coder extends React.Component {
  state = {
    coders: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/getCoders")
      .then((res) => {
        console.log(res.data);
        this.setState({ coders: res.data });
      })
      .catch((err) => console.log(err));
  }
  handleDelete = (eid) => {
    axios.delete(`http://localhost:8080/api/deleteCoder/${eid}`).then((res) => {
      const coders = this.state.coders.filter((std) => std.cid != eid);
      this.setState({ coders: coders });
    });
  };
  render() {
    return (
      <div className="container mt-3">
        <Link to="/coders/add" className="btn btn-secondary btn-large mb-1">
          Add
        </Link>
        <table className="table w-75 table-dark table-hover mx-auto mt-3">
          <thead>
            <tr>
              <th>C Id</th>
              <th>Name</th>
              <th>Tech</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.coders.map((coder) => (
              <tr>
                <td>{coder.cid}</td>
                <td>{coder.cname}</td>
                <td>{coder.tech}</td>
                <td>
                  <Link to={`/coders/update/${coder.cid}`}>
                    <input
                      type="button"
                      value="Update"
                      className="btn btn-success me-2 mt-3"
                    />
                  </Link>
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-outline-danger ms-2 mt-3"
                    onClick={() => this.handleDelete(coder.cid)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Coder;
