import React, { useState } from "react";

function ListDisplay() {
  const [items, setItems] = useState([
    "Fullstack",
    "Mulesoft",
    "Guidewire",
    "SDET",
    "Data analytics",
    "Salesforce",
    "Digital automation",
  ]);

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    console.log(newItems);
  };

  return (
    <div>
      <h2>List of practices in Exavalu</h2>
      <hr />
      <div>
        <table
          className="table"
          style={{ margin: "auto", textAlign: "left", width: "500px" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListDisplay;
