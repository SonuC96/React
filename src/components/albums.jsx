import axios from "axios";
import React, { Component } from "react";
import AlbumsTable from "./albumsTable";

class Albums extends Component {
  state = {
    albums: [],
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => this.setState({ albums: res.data }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <AlbumsTable albums={this.state.albums} />
      </div>
    );
  }
}

export default Albums;
