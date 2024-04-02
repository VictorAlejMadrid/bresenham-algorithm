import { useState } from "react";
import Pixel from "../Pixel";
import styled from "styled-components";
import Modal from "../Modal";

function position(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.rgb = [200, 200, 200];
}

function setColorsOnArr([r1, g1, b1], [r2, g2, b2], length) {
    let colorsArr = [[r2, g2, b2]]; // To avoid infinity in the first index

    for (let i = 0; i <= length; i++) {
        colorsArr[i] = [
            Math.round(r1 * (i / length) + r2 * ((length - i) / length)),
            Math.round(g1 * (i / length) + g2 * ((length - i) / length)),
            Math.round(b1 * (i / length) + b2 * ((length - i) / length)),
        ];
    }

    return colorsArr;
}

//Bresenhams's algorithm
function setLine([firstPoint, secondPoint]) {
    let arrPixels = [];

    let x1 = firstPoint.x;
    let y1 = firstPoint.y;
    let x2 = secondPoint.x;
    let y2 = secondPoint.y;

    let dX = Math.abs(x2 - x1);
    let dY = Math.abs(y2 - y1);

    let step = dX > dY ? dX : dY;

    let xIncrease = dX / step;
    let yIncrease = dY / step;

    let colorsOnArr = setColorsOnArr(firstPoint.rgb, secondPoint.rgb, step);

    for (let i = 0; i <= step; i++) {
        arrPixels.push({
            x: Math.round(x1),
            y: Math.round(y1),
            rgb: colorsOnArr[i],
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

//Create an array of 50 x 50 to create a table with the positions already setted.
function createArray() {
    const array = [];
    let x = 0;
    let y = 0;

    for (let i = 0; i < 2500; i++) {
        array[i] = new position(x, y, false);
        x++;
        y = x == 50 ? y + 1 : y;
        x = x == 50 ? 0 : x;
    }

    return array;
}

export default function Tabela() {
    const [lineToFill, setLineToFill] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedPixels, setSelectedPixels] = useState([]);
    const generateArray = createArray();

    function setRgbOnPixels(rgb) {
        selectedPixels[selectedPixels.length - 1].rgb = [rgb.r, rgb.g, rgb.b]; // Gets the last added position and set the rgb
        setModalVisible(false);

        if (selectedPixels.length == 2) {
            setLineToFill(lineToFill.concat(setLine(selectedPixels)));
            setSelectedPixels([]);
        }
    }

    function setPixelsPositions(pixelPosition) {
        setModalVisible(true);

        selectedPixels.push(pixelPosition);
        setSelectedPixels(selectedPixels);
    }

    return (
        <DivEstilizada>
            {generateArray.map((pixel, index) => (
                <Pixel
                    lineToFill={lineToFill}
                    selectedPixels={selectedPixels}
                    setPixelsPositions={setPixelsPositions}
                    position={pixel}
                    key={index}
                />
            ))}
            {modalVisible ? (
                <Modal setRgbOnPixels={setRgbOnPixels} close={setModalVisible} />
            ) : null}
        </DivEstilizada>
    );
}

const DivEstilizada = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 600px;
`;
