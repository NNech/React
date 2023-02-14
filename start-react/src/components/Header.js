import React, { Component } from "react";
import styles from "../App.module.css";

class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.header_wrap}>
                    <div>
                        <a>Docs</a>
                    </div>
                    <div>
                        <a>Tutorial</a>
                    </div>
                    <div>
                        <a>Blog</a>
                    </div>
                    <div>
                        <a>Community</a>
                    </div>
                    <div>
                        <input placeholder="Search..."></input>
                    </div>
                    <div>
                        <button>LOG IN</button>
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;
