import React, { Component } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./Todo.css";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            todoList: [],
        };
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
                    <Form onSubmit={this.addTodo.bind(this)} />
                </div>
            </>
        );
    }
}
export default Todo;
