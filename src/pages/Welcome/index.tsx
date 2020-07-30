import React from "react";

import Counter from "../../components/Counter";
import Mirror from "../../components/Mirror";

const Welcome: React.FC = () => {
    return (
        <>
            <Counter />
            <hr />
            <Mirror />
        </>
    );
};

export default Welcome;
