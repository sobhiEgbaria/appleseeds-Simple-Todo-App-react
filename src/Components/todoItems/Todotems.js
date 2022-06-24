import React from "react";
import "./Todoitem.css";

const ToDoItems = (props) => {
  const { items } = props;
  const { deleteItem } = props;

  const length = items.length;

  const listOfItems = length ? (
    items.map((item) => {
      return (
        <>
          <div key={item.id}>
            <span className="name">{item.name}</span>
            <span className="age">{item.age}</span>
            <span className="add X" onClick={() => deleteItem(item.id)}>
              &times;
            </span>
          </div>
        </>
      );
    })
  ) : (
    <p>there is no items to show</p>
  );

  return (
    <>
      <div className="listOfItems">
        <div className="title">
          <span className="name">name </span>
          <span className="age">age </span>
          <span className="add">action </span>
        </div>
        {listOfItems}
      </div>
    </>
  );
};

export default ToDoItems;
