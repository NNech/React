import React from "react";
import styles from "../App.module.css";

export default function Aside() {
    return (
        <aside className={styles.aside}>
            <div>
                <a className={styles.link}>MAIN CONCEPTS</a>
            </div>
            <div>
                <a className={styles.link}>INSTALLATION</a>
            </div>
            <div>
                <a className={styles.link}>TESTING</a>
            </div>
            <div>
                <a className={styles.link}>CONTRIBUTING</a>
            </div>
        </aside>
    );
}
