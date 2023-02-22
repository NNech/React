import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class Form extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const { addTodo } = this.props;

        addTodo({
            id: uuidv4(),
            title: event.target.title.value,
            done: false,
        });
        event.target.reset();
    };
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="inputText"
                        type="text"
                        placeholder="Add todo"
                        name="title"
                    />

                    <input className="inputSubmit" type="submit" value="+" />
                </form>
            </>
        );
    }
}
export default Form;
