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
        return (
            <>
                <div className="listItem">
                    <input type="checkbox"></input>
                    <div className={done}>{this.props.todo.title}</div>
                </div>
            </>
        );
    }
}
export default ListItem;
