import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert("Отправленное имя: " + this.state.value);
        event.preventDefault();
        const newTodo = [
            ...this.todoList,
            {
                title: this.state.value,
                id: String(Math.random()),
                done: false,
            },
        ];

        this.onSubmit(newTodo);
        this.setState("");
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />

                    <input type="submit" value="Save" />
                </form>
            </>
        );
    }
}
export default Form;
