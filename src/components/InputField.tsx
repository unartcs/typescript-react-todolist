import React, { useState } from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
  return (
    <form className="input-form">
      <input className="input_box" required placeholder="Add a task..."></input>
      <button className="input_button">+</button>
    </form>
  );
};

export default InputField;
