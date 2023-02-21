import React, { Component } from "react";

class Form extends Component {
    /* constructor(props) {
        super(props);

        this.state = {
            value: "",
        };
    }*/

    /* handleChange = (event) => {
        this.setState({ value: event.target.value });
    };*/

    handleSubmit = (event) => {
        event.preventDefault();
        const { addTodo } = this.props;

        addTodo({
            id: String(Math.random()),
            // title: this.state.value,
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
                        // value={this.state.value}
                        //	{/* onChange={this.handleChange}*/}
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
