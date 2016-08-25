import React from 'react';

export default class TodoBox extends React.Component {
	// Omitted
}

class TodoList extends React.Component {
		render() {
				return (
						<div className="todoList">
								<table style={{border: "2px solid black"}}>
										<tbody>
										<Todo title="Shopping">Milk</Todo>
										<Todo title="Hair cut">13:00</Todo>
										</tbody>
								</table>
						</div>
				);
		}
}

class Todo extends React.Component {
	// Write code here
}

class TodoForm extends React.Component {
	// Omitted
}
