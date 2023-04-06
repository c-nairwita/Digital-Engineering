import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

function ListSearch() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <br />
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
        />
      </div>

      <Table
        style={{ width: "30rem", margin: "auto", marginTop: "3rem" }}
        striped
        bordered
        hover
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ListSearch;
