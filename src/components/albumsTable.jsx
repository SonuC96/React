import React from "react";

const AlbumsTable = (props) => {
  return (
    <div className="container">
      <input
        type="submit"
        value="Add"
        className="btn btn-primary float-end my-3"
      />
      <table className="table w-75 table-dark table-hover mx-auto mt-3">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.albums.map((album) => (
            <tr>
              <td>{album.userId}</td>
              <td>{album.id}</td>
              <td>{album.title}</td>
              <td>
                <input
                  type="button"
                  value="Update"
                  className="btn btn-success"
                />
                <input
                  type="button"
                  value="Delete"
                  className="btn btn-outline-danger ms-2 mt-3"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlbumsTable;
