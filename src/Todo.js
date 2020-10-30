import React from "react";
import "./styles.css";

const Todo = (props) => {
  return (
    <div className="list-item">
      {props.content}
      <button
        class="delete is-pulled-right"
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        Done
      </button>
    </div>
  );
};

export default Todo;
