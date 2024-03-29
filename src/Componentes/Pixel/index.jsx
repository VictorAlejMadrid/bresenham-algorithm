import styled from "styled-components";

export default function Pixel({ position, setNewLine, lineToFill }) {

    if (lineToFill != undefined) {
        lineToFill.forEach(pixel => {
            if (pixel.x == position.x && pixel.y == position.y) {
                position.color = true;
                console.log(position);
            }
        })
    }

    return(
        <PixelEstilo $color={position.color} onClick={() => {
            setNewLine(position); }}
        />
    );
}

const PixelEstilo = styled.div`
    width: 12px;
    height: 12px;
    background-color: ${props => props.$color ? 'blue' : '#a3a3a3'};
    border: 1px solid black;
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
    cursor: pointer;
`;