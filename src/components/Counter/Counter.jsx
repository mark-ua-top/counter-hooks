import { useState } from "react";
import { AddButton } from "../AddButton/AddButton";
import { RemoveButton } from "../RemoveButton/RemoveButton";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>{count}</h1>
            <AddButton setCount={setCount} />
            <RemoveButton setCount={setCount} />
        </>
    );
};

export default Counter;
