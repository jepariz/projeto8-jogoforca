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
  const [chute, setChute] = useState("");
  const [palavraExibida, setPalavraExibida] = useState("");
  const [cor, setCor] = useState("");

  console.log(palavraSorteada);

  const palavraEscondida = palavraSorteada
    .split("")
    .map((letra) => (letraSelecionada.includes(letra) ? letra : " _ "))
    .join("");

  function iniciarJogo() {
    setIniciaJogo(true);

    const palavrasSemAcento = palavras.map((p) =>
      p.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    );

    const palavra =
      palavrasSemAcento[Math.floor(Math.random() * palavras.length)];
    setPalavraSorteada(palavra);

    if(iniciaJogo){
      setPalavraExibida(palavraEscondida)
      console.log(palavraEscondida
        )
    }
  }

  // function exibirPalavra() {
  //   if (chute === palavraSorteada) {
  //     setPalavraExibida(chute);
  //     setCor(".cor1");
  //   }
  // }

  function selecionarLetra(letra) {
    if (palavraSorteada.includes(letra)) {
      console.log(palavraSorteada);
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

  return (
    <div className="container-jogo">
      <GlobalStyle />
      <div className="container-imagem">
        <img src={imagemErros} />
        <div>
          <button className="escolher-palavra" onClick={iniciarJogo}>Escolher Palavra</button>
          <ul className="container-palavra">
            <li className={cor}>{palavraEscondida}</li>
          </ul>
        </div>
      </div>
      <div className="container-alfabeto">
        <div>
          {alfabeto.map((letra) => (
            <button className="letras"
              onClick={() => selecionarLetra(letra)}
              disabled={!iniciaJogo || letraClicada.includes(letra)}
              key={letra}
            >
              {letra.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <div className="chutes">
        <p>Já sei a palavra!</p>
        <input
          disabled={!iniciaJogo}
          value={chute}
          onChange={(event) => setChute(event.target.value)}
        />
        <button className="btn-chutar"
          onClick={() => {
            if (chute === palavraSorteada) {
            } else if (chute !== palavraSorteada) {
              setImagemErros(forca6);
            }
          }}
        >
          Chutar
        </button>
      </div>
    </div>
  );
}
