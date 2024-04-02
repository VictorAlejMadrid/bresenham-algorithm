import { useState } from "react";
import styled from "styled-components";

export default function Modal({ setRgbOnPixels }) {
    const [rgb, setRgb] = useState({
        r: 0,
        g: 0,
        b: 0,
    });

    function handleChangeR(value) {
        setRgb({
            ...rgb,
            r: value,
        });
    }

    function handleChangeG(value) {
        setRgb({
            ...rgb,
            g: value,
        });
    }

    function handleChangeB(value) {
        setRgb({
            ...rgb,
            b: value,
        });
    }

    return (
        <DivModal>
            <Card>
                <h1>Esolha o RGB do pixel</h1>
                <DivInputs>
                    <p>R:</p>
                    <input
                        type="range"
                        onChange={(e) => handleChangeR(e.target.value)}
                        min={1}
                        max={255}
                        step={1}
                    />
                </DivInputs>
                <DivInputs>
                    <p>G:</p>
                    <input
                        type="range"
                        onChange={(e) => handleChangeG(e.target.value)}
                        min={1}
                        max={255}
                        step={1}
                    />
                </DivInputs>
                <DivInputs>
                    <p>B:</p>
                    <input
                        type="range"
                        onChange={(e) => handleChangeB(e.target.value)}
                        min={1}
                        max={255}
                        step={1}
                    />
                </DivInputs>
                <SelectedColor $r={rgb.r} $g={rgb.g} $b={rgb.b} onClick={() => setRgbOnPixels(rgb)}>
                    Quero esta cor !
                </SelectedColor>
            </Card>
        </DivModal>
    );
}

const DivModal = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
`;

const Card = styled.div`
    position: relative;
    width: 400px;
    height: 200px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    color: black;
`;

const DivInputs = styled.div`
    display: flex;
    margin: 0;
    gap: 8px;

    & > input,
    p {
        margin: 0;
    }
`;

const SelectedColor = styled.div`
    margin-top: 10px;
    width: 70%;
    height: 25px;
    border-radius: 12px;
    text-align: center;
    cursor: pointer;
    color: white;
    background-color: rgb(${(props) => `${props.$r}, ${props.$g}, ${props.$b}`});
`;
