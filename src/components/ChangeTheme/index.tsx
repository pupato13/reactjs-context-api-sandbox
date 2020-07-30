import React from "react";

// hooks
import { useTheme } from "../../context/Theme";

export default function ChangeTheme() {
    const { changeTheme } = useTheme();

    return (
        <div>
            <button onClick={changeTheme}>Switch Theme</button>
        </div>
    );
}
