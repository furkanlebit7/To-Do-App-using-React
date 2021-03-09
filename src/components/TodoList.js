import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ items, clearItems, deleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item, index) => (
          <TodoItem key={index} item={item} deleteItem={deleteItem} />
        ))}
      </ul>
      <p>
        <button className="clearBtn" onClick={clearItems}>
          Clear Items
        </button>
      </p>
    </div>
  );
}

export default TodoList;
