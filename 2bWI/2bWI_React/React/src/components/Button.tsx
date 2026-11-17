
import { useState } from "react";

export default function Button() {
    const [counter, setCounter] = useState(0);

    return (
        <button onClick={() => {
            let newValue = counter + 1;
            setCounter(newValue);
        }}>
           This Button does Nothing: {counter}
        </button>
    );
}
