import React from "react";

import { createStage } from "../gameHelper";

import { StyledTetrisWrapper,StyledTetris } from "./styles/StyledTetris";

import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton"
import { useState } from "react/cjs/react.development";
import { usePlayer } from "../hooks/usePlayer";
import {useStage} from "../hooks/useStage"

const Tetris = ()=>{
    const [dropTime,setDropTime] = useState(null);
    const [gameOver,setGameOver] = useState(false);

    const [player] = usePlayer();
    const [stage,setStage] = useStage(player);



    return(
        <StyledTetrisWrapper>
            <StyledTetris>
            <Stage stage={createStage()} />
            <aside>
                {gameOver?(
                    <Display gameOver={gameOver} text="Game Over"/>
                ):(<div>
                    <Display text="Score"/>
                    <Display text = "Rows"/>
                    <Display text="Level"/>
                    </div>
                )}
                <StartButton/>
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;
