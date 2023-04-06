import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
}

function ListReducer() {
  const [items, dispatch] = useReducer(reducer, []);

  function handleAddItem() {
    const newItem = prompt("Enter new item:");
    if (newItem) {
      dispatch({ type: "ADD_ITEM", payload: newItem });
    }
  }

  function handleRemoveItem(item) {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  }

  return (
    <div style={{ textAlign: "center", paddingTop: "8rem" }}>
      <button id="btn" onClick={handleAddItem}>
        Add Item
      </button>

      <div id="card" className="card">
        <div className="card-body">
          <h4 className="card-title" style={{ textAlign: "center" }}>
            List of Items:
          </h4>
          <hr />
          <ul>
            {items.map((item) => (
              <li key={item}>
                <div id="left" style={{ display: "flex" }}>
                    <div id="name">{item}</div>
                    <div id="edit" style={{ display: "flex" }}>
                      <button id="btn-edit" onClick={() => handleRemoveItem(item)}>
                      Remove
                      </button>
                    </div>
                  </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ListReducer;
