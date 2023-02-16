import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
    state = {
        todoList: [
            {
                title: "Smth very important",
                id: 1,
                done: false,
            },
            {
                title: "Another very important thing",
                id: 2,
                done: false,
            },
            {
                title: "Ordinary thing",
                id: 3,
                done: true,
            },
        ],
    };

    render() {
        return (
            <ul>
                {this.state.todoList.map((todo) => (
                    <ListItem todo={todo} key={todo.id} />
                ))}
            </ul>
        );
    }
}
export default List;
