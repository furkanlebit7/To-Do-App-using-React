import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Action from "./components/Action";

function App() {
  const [items, setItems] = useState([]);

  const app = {
    title: "Todo Application",
    description: "Lorem, ipsum dolor.",
  };

  useEffect(() => {
    const getJson = localStorage.getItem("items");
    const localItems = JSON.parse(getJson);
    setItems(localItems);
  }, []);

  useEffect(() => {
    const json = JSON.stringify(items);
    localStorage.setItem("items", json);
  }, [items]);

  function clearItems() {
    setItems([]);
  }
  function addItem(item) {
    if (!item) {
      return "Enter the element you want to add";
    } else if (items.indexOf(item) > -1) {
      return "Element is already exist";
    }
    setItems([...items, item]);
  }

  function deleteItem(item) {
    const arr = items.filter((i) => {
      return i !== item;
    });
    setItems(arr);
  }

  return (
    <div className="container">
      <Header title={app.title} description={app.description} />
      <TodoList items={items} clearItems={clearItems} deleteItem={deleteItem} />
      <Action addItem={addItem} />
    </div>
  );
}

export default App;
