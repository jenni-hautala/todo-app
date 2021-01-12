/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./App.css";
// Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
	// States
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);

	// UseEffect
	// Run only once
	useEffect(() => {
		getLocalTodos();
	}, []);
	// Run when todos or status updates
	useEffect(() => {
		filterHandler();
		saveLocalTodos();
	}, [todos, status]);

	// Functions
	function filterHandler() {
		switch (status) {
			case "completed":
				setFilteredTodos(todos.filter(todo => todo.completed === true))
				break;

			case "uncompleted":
				setFilteredTodos(todos.filter(todo => todo.completed === false))
				break;

			default:
				setFilteredTodos(todos);
				break;
		}
	}

	// Save to local
	function saveLocalTodos() {
		localStorage.setItem("todos", JSON.stringify(todos));
	}
	function getLocalTodos() {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			const todoLocal = JSON.parse(localStorage.getItem("todos"));
			setTodos(todoLocal);
		}
	}

  return (
    <div className="App">
		<header>
			<h1>Awesome Todo List</h1>
		</header>
		<Form
			todos={todos}
			setTodos={setTodos}
			inputText={inputText}
			setInputText={setInputText}
			setStatus={setStatus}
		/>
		<TodoList
			setTodos={setTodos}
			todos={todos}
			filteredTodos={filteredTodos}
		/>
    </div>
  );
}

export default App;
