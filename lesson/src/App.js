import "./App.css";
import React, { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }

    return (
        <>
            <button onClick={increment}>+1</button>
            <span>{count}</span>
            <button onClick={decrement}>-1</button>
        </>
    );
}
