import React, { Component } from "react";
import styles from "../ListItem.modules.css";

class ListItem extends Component {
    constructor() {
        super();
        this.state = {
            done: true,
        };
    }

    render() {
        const done = this.props.todo.done ? styles.done : "";
        return <li className={done}>{this.props.todo.title}</li>;
    }
}

export default ListItem;
