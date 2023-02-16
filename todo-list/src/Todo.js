import React, { Component } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./Todo.css";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { todoList: [] };
    }

    addTodo({ id, title, done }) {
        const { todoList } = this.state;
        this.setState({ todoList: [...todoList, { id, title, done }] });
    }

    render() {
        return (
            <>
                <div className="todo-container">
                    <div className="todo-header">Todo List</div>
                    <List todoList={this.state.todoList} />
                    <Form addTodo={this.addTodo.bind(this)} />
                </div>
            </>
        );
    }
}
export default Todo;
