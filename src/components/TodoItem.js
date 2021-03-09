import React from "react";

function TodoItem({ item, deleteItem }) {
  function removeItem() {
    deleteItem(item);
  }

  return (
    <div>
      <li className="listItem">
        {item}
        <button
          className="deleteBtn fas fa-trash-alt"
          onClick={removeItem}
        ></button>
      </li>
    </div>
  );
}

export default TodoItem;
