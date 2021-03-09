import React, { useState } from "react";

function Action({ addItem }) {
  const [error, setError] = useState("");

  function onFormSubmit(e) {
    e.preventDefault();

    const item = e.target.elements.txtItem.value.trim();
    const error = addItem(item);
    setError(error);
    e.target.elements.txtItem.value = "";
  }
  return (
    <div className="form">
      {error && <p className="error">{error}</p>}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="txtItem" />
        <button className="addBtn" type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
}

export default Action;
