import React from "react";
// Import Components
import Todo from "./Todo";


function TodoList({ setTodos, todos, filteredTodos }) {
	return(
		<div className="todo-container">
			<ul className="todo-list">
				{filteredTodos.map(todo => (
					// Sillonku mappaillaan niin pitää olla key että tiietään mistä todosta puhutaan, sitte renderöidään oikein
					// Huomaa että pitää laittaa todo sinne myös, niin voidaan käyttää sitä Todo.js-tiedostossa
					<Todo
						setTodos={setTodos}
						todos={todos}
						text={todo.text}
						key={todo.id}
						todo={todo}
					/>
				))}
			</ul>
		</div>
	);
}

export default TodoList;