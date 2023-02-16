import React, { Component } from "react";
//import Form from "./components/Form";
import List from "./components/List";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            todoList: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleClick() {
        const task = {
            id: String(Math.random()),
            title: this.state.value,
            done: false,
        };
        debugger;
        this.setState({
            value: "",
            todoList: [...this.state.todoList, task],
        });
    }

    render() {
        return (
            <>
                <div>
                    <div>
                        <input
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <button type="button" onClick={this.handleClick}>
                            Save
                        </button>
                    </div>
                    <List todoList={this.state.todoList} />
                </div>
            </>
        );
    }
}
export default Todo;
