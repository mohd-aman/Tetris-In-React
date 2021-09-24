import React from "react";
import { TETROMINOS } from "../tetrominos";
import { StyledCell } from "./styles/StyledCell";

const Cell = ({type})=>(
    <StyledCell type={type} color={TETROMINOS[type].color}>
        {console.log('rerender cell')}    
    </StyledCell>
)

export default React.memo(Cell);
