import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { useState } from "react";
import palavras from "./Palavras.js";

const alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export default function App() {
  const [iniciaJogo, setIniciaJogo] = useState(false);
  const [erros, setErros] = useState(0);
  const [palavraSorteada, setPalavraSorteada] = useState("");

  function iniciarJogo() {
    if (iniciarJogo) {
      setIniciaJogo(true);
    }

    const palavra = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavraSorteada(palavra);
  }

  const arrayDaPalavra = Array.from(palavraSorteada);
  console.log(arrayDaPalavra);

  console.log(iniciaJogo);

  return (
    <ContainerJogo>
      <GlobalStyle />
      <ContainerImagem>
        <img src={forca0} />
        <div>
          <BotaoPalavra onClick={iniciarJogo}>Escolher Palavra</BotaoPalavra>
          <ContainerPalavra>
            {arrayDaPalavra.map((letra) => ` _ `)}
          </ContainerPalavra>
        </div>
      </ContainerImagem>
      <ContainerAlfabeto>
        <div>
          {alfabeto.map((letra) => (
            <BotaoLetra disabled={!iniciaJogo} key={letra}>
              {letra.toUpperCase()}
            </BotaoLetra>
          ))}
        </div>
      </ContainerAlfabeto>
      <ContainerInput>
        <p>Já sei a palavra!</p>
        <InputPalavra disabled={!iniciaJogo} />
        <BotaoChutar>Chutar</BotaoChutar>
      </ContainerInput>
    </ContainerJogo>
  );
}

// Estilos ---------------------------------------------------------------------------------------------

const ContainerJogo = styled.div`
  display: grid;
  justify-content: center;
  font-family: "Roboto", sans-serif;
`;

const ContainerImagem = styled.div`
  width: 620px;
  display: flex;
  gap: 180px;
  margin-top: 80px;

  img {
    width: 260px;
    height: 300px;
  }
`;

const BotaoPalavra = styled.button`
  margin-top: 17px;
  width: 140px;
  height: 40px;
  background-color: #50c878;
  border: none;
  border-radius: 7px;
  color: #fff;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;

const ContainerAlfabeto = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  div {
    width: 530px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const BotaoLetra = styled.button`
  width: 30px;
  height: 30px;
  font-weight: 700;
  background-color: #e8f4f8;
  color: #30829d;
  border: 1px solid lightblue;
  border-radius: 2px;

  &:disabled {
    background-color: #b1b1b1;
    color: #808080;
    border: none;
    cursor: auto;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ContainerInput = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const InputPalavra = styled.input`
  width: 250px;
  height: 25px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #fff;

  &:disabled {
    border: 2px solid #b1b1b1;
    background-color: #f2f2f2;
  }
`;

const BotaoChutar = styled.button`
  width: 70px;
  height: 40px;
  background-color: #e8f4f8;
  border: 2px solid lightblue;
  border-radius: 5px;
  color: #30829d;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;

const ContainerPalavra = styled.p`
  margin-top: 190px;
  display: flex;
  font-weight: 700;
  font-size: 30px;
`;
