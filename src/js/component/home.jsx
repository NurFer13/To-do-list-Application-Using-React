import React from "react";
import { useState } from "react";
//include images into your bundle

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState();
  const [toDoList, setToDoList] = useState([]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const newToDo = {
        id: Math.random(),
        todo: inputValue,
      };
      setToDoList(todos.concat(newToDo));
      setInputValue("");
    }
  };
  const handleDeleteToDoList = (id) => {
    const newList = todos.filter((item) => id !== item.id);
    setToDoList(newList);
  };
  return (
    <>
      <div className="card bs-tertiary-bg-rgb text-center">
        <div className="header">
          <h1>To do List</h1>
        </div>
        <ul>
          <li>
            <input
              type="text"
              placeholder="What needs to be done"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </li>
          {toDoList.map((item) => (
            <li key={item.id}>
              {item.toDoList}
              <i
                className="el icono que quiera meterle"
                onClick={() => handleDeleteToDoList(item.id)}
              >
                {" "}
              </i>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
