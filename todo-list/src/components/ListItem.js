import React, { Component } from "react";

class ListItem extends Component {
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
                        <button
                            className="completeBtn"
                            onClick={() =>
                                this.props.completeTodo(this.props.todo.id)
                            }
                        >
                            Complete
                        </button>
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
