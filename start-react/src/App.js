import React, { Component } from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";
import styles from "./App.module.css";

class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <Header />
                <div className={styles.container}>
                    <div className={styles.page_wrap}>
                        <Aside />
                        <Main />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
