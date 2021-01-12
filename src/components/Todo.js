import React from "react";

/**
 * text: tätä käytetään TodoList-tiedostossa, sieltä otetaan teksti tuohon kohtaan
 * todo: kyseinen todo
 * setTodos: tarvitaan tätä, niin voidaan vaihtaa statea.
 * todos: käydään kaikki todot läpi kerralla
 */

function Todo({ text, todo, setTodos, todos }) {
	// Events
	function deleteHandler() {
		// Filtteröi mätsit
		setTodos(todos.filter((el) => el.id !== todo.id));
		// Seukki console.log näyttäis sen elementin jonka _kohdalla_ ollaan, eli sitä mitä klikataan
		// console.log(todo);
	}

	function completeHandler() {
		setTodos(todos.map(item => {
			if (item.id === todo.id) {
				return {
					// ... tarkoittaa että otetaan kaikki mutta muutetaan vaan sitä yhtä propertyä: completedia
					...item, completed: !item.completed
				}
			}
			// Jos ei mätsänny niin palautetaan vaan itemi
			return item;
		}));
	}

	return(
		<div className="todo">
			{/* Voidaan muokata css-luokkaa brackettien avulla!! */}
			<li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
			<button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
			<button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
		</div>
	);
}

export default Todo;