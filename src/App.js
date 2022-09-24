import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
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
  const [erros, setErros] = useState(1);
  const [palavraSorteada, setPalavraSorteada] = useState("");
  const [letraSelecionada, setletraSelecionada] = useState([]);
  const [letraClicada, setLetraClicada] = useState([]);
  const [imagemErros, setImagemErros] = useState(forca0);
  

  console.log(palavraSorteada);

  const palavraEscondida = palavraSorteada
    .split("")
    .map((letra) => (letraSelecionada.includes(letra) ? letra : " _ "))
    .join("");


  function iniciarJogo() {
    setIniciaJogo(true);

    const palavrasSemAcento = palavras.map((p) => p.normalize("NFD").replace(/[\u0300-\u036f]/g, ''))
    console.log(palavrasSemAcento)

    const palavra = palavrasSemAcento[Math.floor(Math.random() * palavras.length)];
    setPalavraSorteada(palavra);
  }


  function selecionarLetra(letra) {
    if (palavraSorteada.includes(letra)) {
     
      console.log(palavraSorteada)
      setletraSelecionada([...letraSelecionada, letra]);
      }
    
    setLetraClicada([...letraClicada, letra]);

    if (!palavraSorteada.includes(letra)) {
      setErros(erros + 1);
      switch (erros) {
        case 1:
          setImagemErros(forca1);
          break;
        case 2:
          setImagemErros(forca2);
          break;
        case 3:
          setImagemErros(forca3);
          break;
        case 4:
          setImagemErros(forca4);
          break;
        case 5:
          setImagemErros(forca5);
          break;
        case 6:
          setImagemErros(forca6);
          break;
        default:
          break;
      }
      
    }
}

function chutar ()

  return (
    <ContainerJogo>
      <GlobalStyle />
      <ContainerImagem>
        <img src={imagemErros} />
        <div>
          <BotaoPalavra onClick={iniciarJogo}>Escolher Palavra</BotaoPalavra>
          <ContainerPalavra>{palavraEscondida}</ContainerPalavra>
        </div>
      </ContainerImagem>
      <ContainerAlfabeto>
        <div>
          {alfabeto.map((letra) => (
            <BotaoLetra
              onClick={() => selecionarLetra(letra)}
              disabled={!iniciaJogo || letraClicada.includes(letra)}
              key={letra}
            >
              {letra.toUpperCase()}
            </BotaoLetra>
          ))}
        </div>
      </ContainerAlfabeto>
      <ContainerInput>
        <p>Já sei a palavra!</p>
        <InputPalavra disabled={!iniciaJogo} />
        <BotaoChutar onClick={chutar}>Chutar</BotaoChutar>
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
  gap: 160px;
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

const ContainerPalavra = styled.ul`
  margin-top: 190px;
  display: flex;
  gap: 8px;
  font-weight: 700;
  font-size: 25px;
`;
