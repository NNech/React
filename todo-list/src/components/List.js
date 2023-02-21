import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
    /*constructor(props) {
        super(props);
        /* this.state = {
            todoList: [
                {
                    title: "Go to the gym",
                    id: 1,
                    done: false,
                },
                {
                    title: "Go to the pool",
                    id: 2,
                    done: false,
                },
                {
                    title: "Go to massage",
                    id: 3,
                    done: true,
                },
            ],
        };
        
    }*/

    render() {
        return (
            <div className="list">
                {this.props.todoList.map((todo) => (
                    <ListItem todo={todo} key={todo.id} />
                ))}
            </div>
        );
    }
}
export default List;
