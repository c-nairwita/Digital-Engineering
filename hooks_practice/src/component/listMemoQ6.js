import React, { useState, useMemo } from "react";

function ListMemo({ items }) {
  const [sortCriteria, setSortCriteria] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedItems = useMemo(() => {
    const sorted = [...items].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortCriteria] > b[sortCriteria] ? 1 : -1;
      } else {
        return a[sortCriteria] < b[sortCriteria] ? 1 : -1;
      }
    });
    return sorted;
  }, [items, sortCriteria, sortOrder]);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "2rem", marginTop: "5rem" }}>
        <button onClick={() => setSortCriteria("name")}>Sort by Name</button>
        <button onClick={() => setSortCriteria("age")}>Sort by Age</button>
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          {sortOrder === "asc" ? "Sort Descending" : "Sort Ascending"}
        </button>
      </div>
      <div id="card" className="card">
        <div className="card-body">
          <h4 className="card-title" style={{ textAlign: "center" }}>
            List:
          </h4>
          <hr />
          <ul>
            {sortedItems.map((item) => (
              <li key={item.name}>
                {item.name} ({item.age})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ListMemo;
