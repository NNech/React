import React from "react";
import styles from "../App.module.css";

export default function Aside() {
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
