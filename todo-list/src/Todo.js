import React, { Component } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./Todo.css";

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            value: "",
            todoList: [
                {
                    title: "Go to the gym",
                    id: 1,
                    done: false,
                },
                {
                    title: "Go to the pool",
                    id: 2,
                    done: false,
                },
                {
                    title: "Go to massage",
                    id: 3,
                    done: true,
                },
            ],
        };
    }

    addTodo = ({ id, title, done }) => {
        const { todoList } = this.state;
        this.setState({
            todoList: [...todoList, { id, title, done }],
        });
    };

    render() {
        return (
            <>
                <div className="todo-container">
                    <div className="todo-header">My Todo List</div>
                    <List todoList={this.state.todoList} />
                    <Form addTodo={this.addTodo} />
                </div>
            </>
        );
    }
}
export default Todo;
