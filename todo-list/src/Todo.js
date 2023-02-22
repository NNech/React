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
                    title: "Drink Warsteiner",
                    id: 1,
                    done: false,
                },
                {
                    title: "Drink Paulaner",
                    id: 2,
                    done: false,
                },
                {
                    title: "Drink Erdinger",
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

    deleteTodo = (id) => {
        this.setState({
            todoList: this.state.todoList.filter((todo) => todo.id !== id),
        });
    };

    completeTodo = (id) => {
        const { todoList } = this.state;
        this.setState({
            todoList: todoList.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            ),
        });
    };

    render() {
        return (
            <>
                <div className="todo-container">
                    <div className="todo-header">My beer Todo List</div>
                    <List
                        todoList={this.state.todoList}
                        deleteTodo={this.deleteTodo}
                        completeTodo={this.completeTodo}
                    />
                    <Form addTodo={this.addTodo} />
                </div>
            </>
        );
    }
}
export default Todo;
