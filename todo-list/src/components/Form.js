import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        // this.state = { value: "" };

        this.state = {
            value: "",
            todoList: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { addTodo } = this.props;

        addTodo({
            id: String(Math.random()),
            title: this.state.value,
            done: false,
        });
        event.target.value = "";
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="inputText"
                        type="text"
                        value={this.props.value}
                        onChange={this.handleChange}
                        placeholder="Add todo"
                    />

                    <input className="inputSubmit" type="submit" value="+" />
                </form>
            </>
        );
    }
}
export default Form;
