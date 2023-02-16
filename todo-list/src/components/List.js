import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
    constructor() {
        super();
        this.state = {
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
    }

    render() {
        return (
            <div className="list">
                {this.state.todoList.map((todo) => (
                    <ListItem todo={todo} key={todo.id} />
                ))}
            </div>
        );
    }
}
export default List;
