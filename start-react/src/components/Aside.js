import React, { Component } from "react";
import styles from "../App.module.css";

class Aside extends Component {
    render() {
        return (
            <aside className={styles.aside}>
                <div className={styles.link}>
                    <a>MAIN CONCEPTS</a>
                </div>
                <div className={styles.link}>
                    <a>INSTALLATION</a>
                </div>
                <div className={styles.link}>
                    <a>TESTING</a>
                </div>
                <div className={styles.link}>
                    <a>CONTRIBUTING</a>
                </div>
            </aside>
        );
    }
}
export default Aside;
