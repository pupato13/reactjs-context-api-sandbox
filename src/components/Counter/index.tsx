import React from "react";

export default function Counter() {
    return (
        <div>
            <span>
                <b>Count: </b>0
            </span>
            <br />
            <button onClick={() => console.log("counting...")}>Increase</button>
        </div>
    );
}
