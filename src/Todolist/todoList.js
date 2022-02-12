import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    "take out trash",
    "clean room",
    "wash dishes",
    "watch aot",
    "watch breaking bad",
  ]);

  const [value, setValue] = useState("");

  function addTodo(e) {
    e.preventDefault();
    if (value) {
      const newTodos = [value, ...todos];
      setTodos(newTodos);
      setValue("");
    }
  }

  function removeTodo(removedIndex) {
    const newTodos = todos.filter((todo, index) => {
      return index !== removedIndex;
    });
    setTodos(newTodos);
  }

  function clearTodos() {
    setTodos([]);
  }

  return (
    <div>
      <h1>Todolist</h1>
      <form onSubmit={addTodo}>
        <input
          value={value}
          type="text"
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <button type="submit">Add</button>
        <button
          onClick={() => {
            clearTodos();
          }}
          type="button"
        >
          Clear Todos
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}{" "}
              <button
                onClick={() => {
                  removeTodo(index);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
