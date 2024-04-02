import styled from "styled-components";

export default function Pixel({ position, setPixelsPositions, lineToFill }) {
    if (lineToFill != undefined) {
        lineToFill.forEach((pixel) => {
            if (pixel.x == position.x && pixel.y == position.y) {
                position.rgb = pixel.rgb;
            }
        });
    }

    return (
        <PixelEstilo
            $r={position.rgb[0]}
            $g={position.rgb[1]}
            $b={position.rgb[2]}
            onClick={() => {
                setPixelsPositions(position);
            }}
        />
    );
}

const PixelEstilo = styled.div`
    width: 12px;
    height: 12px;
    background-color: rgb(${(props) => `${props.$r}, ${props.$g}, ${props.$b}`});
    border: 1px solid black;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: pointer;
`;
