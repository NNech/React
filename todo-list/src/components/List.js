import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
    render() {
        return (
            <div className="list">
                {this.props.todoList.map((todo) => (
                    <ListItem
                        todo={todo}
                        key={todo.id}
                        deleteTodo={this.props.deleteTodo}
                    />
                ))}
            </div>
        );
    }
}
export default List;
