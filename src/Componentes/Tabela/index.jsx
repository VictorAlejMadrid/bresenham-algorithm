import { useState } from "react";
import Pixel from "../Pixel";
import styled from "styled-components";

function position(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

function setLine([firstPoint, secondPoint]) { //Bresenhams's algorithm
    let arrPixels = [];

    let x1 = firstPoint.x;
    let y1 = firstPoint.y;
    let x2 = secondPoint.x;
    let y2 = secondPoint.y;

    let dX = Math.abs(x2 - x1);
    let dY = Math.abs(y2 - y1);

    let step = (dX > dY) ? dX : dY;

    let xIncrease = dX / step;
    let yIncrease = dY / step;

    for(let i = 0; i <= step; i++) {
        arrPixels.push({
            x: Math.round(x1),
            y: Math.round(y1)
        });
        if (x1 > x2) {
            x1 -= xIncrease;
        } else {
            x1 += xIncrease;
        }
        if (y1 > y2) {
            y1 -= yIncrease;
        } else {
            y1 += yIncrease;
        }
    }

    return arrPixels;
}

function createArray() { //Create an array of 50 x 50 to create a table with the positions already setted.
    const array = [];
    let x = 0;
    let y = 0;

    for (let i = 0; i < 2500; i++){
        array[i] = new position(x, y, false);
        x++;
        y = x == 50 ? y + 1 : y;
        x = x == 50 ? 0 : x;
    }

    return array;
}

export default function Tabela() {
    const [selectedPixels, setSelectedPixels] = useState([]);
    const [lineToFill, setLineToFill] = useState([]);
    const generateArray = createArray(); 

    function setNewLine(pixelPosition) {
        selectedPixels.push(pixelPosition);
        setSelectedPixels(selectedPixels);

        if (selectedPixels.length == 2) {
            setLineToFill(lineToFill.concat(setLine(selectedPixels)));
            setSelectedPixels([]);
        }
    }

    
    return(
        <DivEstilizada>
            {generateArray.map((pixel, index) => <Pixel 
                lineToFill={lineToFill} 
                selectedPixels={selectedPixels} 
                setNewLine={setNewLine} 
                position={pixel} 
                key={index}
            />)}
        </DivEstilizada>
    )
}

const DivEstilizada = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 600px;
`;