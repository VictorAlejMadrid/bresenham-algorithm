# Algoritmo de Bresenham

Projeto feito com Vite + Reactjs por Victor Alejandro Pires Madrid

## Este projeto foi feito com base nos estudos realizados na matéria de Computação Gráfica da faculdade.

Este projeto têm como objetivo reforçar meus estudos em Reactjs e utilizar a nova estilização com styled-components.

### Para que serve o algoritmo?

Este algoritmo representa como um algoritmo lê os dados para criar linhas a partir de pontos específicos. Têm como objetivo formar uma linha no meio de diversos pixeis, evitando que fique torta ou inconcisa com uma reta.

### Como funciona o algoritmo?

O algoritmo recolhe dois pontos, por exemplo, ponto A(0, 0) e ponto B(3, 0). Desta forma, o algoritmo, na teoria, cria uma equação linear da reta que liga os dois pontos e preenche com base nesta reta, substituindo o X e recebendo o Y ao realizar a equação. Após isso, somente troca as cores nos locais X e Y.

#### Na realidade...

Na realidade, o algoritmo descobre se a maior distancia entre os pontos se encontra no X ou no Y. A partir deste dado, o algoritmo cria um passo para cada um desses valores, aumentando o X e o Y em valores diferente porém regulares, permitindo que retas com diferentes ângulos sejam criadas.

#### Exemplo

Vamos criar uma reta entre os pontos A(0, 0) e B(3, 2).

Primeiro, descobriremos se a maior distância se encontra no X ou no Y.

dX = 3 - 0; dX = 3;
dY = 2 - 0; dY = 2;

Maior = dX

Após, dividiremos o maior valor para criar o passo de cada coordenada.

passoX = 3/3; passoX = 1;
passoY = 2/3; passoY = 0,6666;

Por último, criamos um loop que vai avançar durante todos os passos arredondando o valor do pixel para cima ou para baixo, criando assim a reta.

for (let i = 0; i <= passo; i++) {
    setPixel(Math.round(x), Math.round(y));
    x += passoX;
    y += passoY;
}
