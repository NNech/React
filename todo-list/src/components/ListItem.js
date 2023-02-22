import React, { Component } from "react";
//import styles from "../ListItem.modules.css";

class ListItem extends Component {
    // constructor(props) {
    //super(props);
    // const { todo } = this.props;
    //const done = this.props.todo.done ? styles.done : "";

    render() {
        return (
            <>
                <div
                    className="listItem"
                    style={{
                        textDecoration: this.props.todo.done
                            ? "line-through"
                            : "",
                    }}
                >
                    <div>
                        <div>{this.props.todo.title}</div>
                    </div>

                    <div>
                        <button className="completeBtn">Complete</button>
                        <button
                            className="deleteBtn"
                            onClick={() =>
                                this.props.deleteTodo(this.props.todo.id)
                            }
                        >
                            x
                        </button>
                    </div>
                </div>
            </>
        );
    }
}
export default ListItem;
