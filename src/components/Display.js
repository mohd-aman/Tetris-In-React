import React from "react";
import { StyleDisplay } from "./styles/StyledDisplay";

const Display = ({gameOver,text}) => (
    <StyleDisplay gameOver={gameOver}>
        {text}
    </StyleDisplay>
)

export default Display;