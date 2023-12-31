import React, {useState} from "react";
import "./App.css";
import InputField from "./components/InputField";

function App() {
  const [todo, setTodo] = useState<string>("");

  return (
    <div className="App">
      <div className="app-header">Task List</div>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
