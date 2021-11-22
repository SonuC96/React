import axios from "axios";
import React, { Component } from "react";
import Coder from "./coder";
class UpdateCoder extends React.Component {
  state = {
    coder: {
      cname: "",
      tech: "",
      role: "",
    },
  };
  componentDidMount() {
    axios
      .get(`http://localhost:8080/api/getCoder/${this.props.match.params.cid}`)
      .then((res) => {
        const coder = { ...this.state.coder };
        coder.cname = res.data.cname;
        coder.tech = res.data.tech;
        coder.role = res.data.role;
        console.log(res.data);
        console.log(coder);
        this.setState({ coder: coder });
      })
      .catch((err) => console.log(err));
  }
  handleChange = (event) => {
    const coder = { ...this.state.coder };
    coder[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ coder: coder });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const coder = {
      cid: this.props.match.params.cid,
      cname: this.state.coder.cname,
      tech: this.state.coder.tech,
      role: this.state.coder.role,
    };
    axios
      .put("http://localhost:8080/api/updateCoder", coder)
      .then((res) => {
        this.props.history.push("/coder");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h3>Update Coder</h3>
        <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3">
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              Coder Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={this.state.coder.cname}
              name="cname"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputTech" className="form-label">
              Tech
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputTech"
              aria-describedby="emailHelp"
              value={this.state.coder.tech}
              name="tech"
              onChange={this.handleChange}
            />
          </div>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={this.state.coder.role}
            name="role"
            onChange={this.handleChange}
          >
            <option selected>Select Role</option>
            <option value="coder">Coder</option>
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

export default UpdateCoder;
