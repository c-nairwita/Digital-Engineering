import React, { useState } from "react";
import "../App.css";

function ListManipulation() {
  const [itemList, setItemList] = useState(
    localStorage.getItem("itemList") === undefined ||
      localStorage.getItem("itemList") === null
      ? []
      : JSON.parse(localStorage.getItem("itemList"))
  );
  const [item, setItem] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  const [editingIndex, setEditingIndex] = useState("");

  function onAdd() {
    var arr = itemList;
    arr.push(item);
    setItem("");
    setItemList(arr);
    localStorage.setItem("itemList", JSON.stringify(arr));
  }

  const onEdit = (item, index) => {
    setEditing(true);
    setCurrentItem(item);
    setEditingIndex(index);
  };
  console.log(editing);

  const onEditSubmit = (index) => {
    setEditing(false);
    const newItems = [...itemList];
    newItems[index] = currentItem;
    setItemList(newItems);
    setItem("");
    localStorage.setItem("itemList", JSON.stringify(newItems));
  };

  const onDelete = (index) => {
    const newItems = [...itemList];
    newItems.splice(index, 1);
    setItemList(newItems);
    localStorage.setItem("itemList", JSON.stringify(newItems));
  };

  return (
    <>
      <div className="App">
        {!editing ? (
          <>
            <h5 id="h5">Enter a new task:</h5>
            <input
              id="input"
              placeholder="New Task"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            <button id="btn" onClick={onAdd}>
              Add
            </button>
          </>
        ) : (
          <>
            <h5 id="h5">Update task:</h5>
            <input
              id="input"
              placeholder="Task"
              value={currentItem}
              onChange={(e) => setCurrentItem(e.target.value)}
            />
            <button id="btn" onClick={() => onEditSubmit(editingIndex)}>
              Update
            </button>
          </>
        )}
      </div>

      <div id="card" className="card">
        <div className="card-body">
          <h4 className="card-title" style={{ textAlign: "center" }}>
            To-Do List
          </h4>
          <hr />
          {itemList.length !== 0 ? (
            <ul>
              {itemList.map((item, index) => (
                <li>
                  <div id="left" style={{ display: "flex" }}>
                    <div id="name">{item}</div>
                    <div id="edit" style={{ display: "flex" }}>
                      <button id="btn-edit" onClick={() => onEdit(item, index)}>
                        Edit
                      </button>
                      <button id="btn-edit" onClick={() => onDelete(index)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            []
          )}
        </div>
      </div>
    </>
  );
}

export default ListManipulation;
