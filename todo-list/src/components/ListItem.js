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
                    <input type="checkbox"></input>
                    <div>{this.props.todo.title}</div>
                    <button style={{ background: "red" }}>x</button>
                </div>
            </>
        );
    }
}
export default ListItem;
