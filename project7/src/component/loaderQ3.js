import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

function Loader() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div style={{textAlign: 'center'}}>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.body}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
export default Loader;
