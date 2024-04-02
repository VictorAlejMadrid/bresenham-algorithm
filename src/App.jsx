import styled from "styled-components";
import Tabela from "./Componentes/Tabela";

export default function App() {
    return (
        <SectionEstilizada>
            <H1Estilizado>Algoritmo de Bresenham</H1Estilizado>
            <PEstilizado>Aperte em dois quadrados para formar uma linha:</PEstilizado>
            <Tabela />
        </SectionEstilizada>
    );
}

const SectionEstilizada = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const H1Estilizado = styled.h1`
    margin: 8px 0px;
    font-size: 32px;
    width: 100%;
    text-align: center;
`;

const PEstilizado = styled.p`
    margin: 8px 0 4px 0;
    font-size: 12px;
`;
