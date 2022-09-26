import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
import GlobalStyle from "./GlobalStyle";
import { useEffect, useState } from "react";
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
  const [letraCorreta, setLetraCorreta] = useState([]);
  const [letraErrada, setLetraErrada] = useState([]);
  const [imagemErros, setImagemErros] = useState(forca0);
  const [chute, setChute] = useState("");
  const [chutou, setChutou] = useState(false);
  const [jogoTerminou, setJogoTerminou] = useState(false);


  console.log(palavraSorteada);

  let palavraEscondida = palavraSorteada
  .split("")
  .map((letra) => (letraCorreta.includes(letra) ? letra : "_"))
  .join("");

   

  function iniciarJogo() {
    setIniciaJogo(true);

    const palavrasSemAcento = palavras.map((p) =>
      p.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    );

    const palavra =
      palavrasSemAcento[Math.floor(Math.random() * palavras.length)];
    setPalavraSorteada(palavra);

  }

  

  function selecionarLetra(letra) {
    if (palavraSorteada.includes(letra)) {
      setLetraCorreta([...letraCorreta, letra]);
    }

    setLetraErrada([...letraErrada, letra]);

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
        <Imagem
          imagem={
            chutou === true
              ? chute !== palavraSorteada
                ? forca6
                : imagemErros
              : imagemErros
          }
          alt="forca"
        />
        <div>
          <button className="escolher-palavra" onClick={iniciarJogo}>
            Escolher Palavra
          </button>
          <div className="container-palavra">
            <Palavra
              cor={
                chutou === true
                  ? chute === palavraSorteada
                    ? "cor1"
                    : "cor2"
                  : "cor3" && imagemErros !== forca6 
                  ? !palavraEscondida.includes('_') ? "cor1" : "cor3" : "cor2"
              }
              conteudo={
                chutou === true
                  ? chute === palavraSorteada
                    ? chute
                    : palavraSorteada
                  : palavraEscondida || jogoTerminou === true
                  ? imagemErros === forca6
                    ? palavraSorteada
                    : palavraEscondida
                  : palavraEscondida 
              }
            />
          </div>
        </div>
      </div>
      <div className="container-alfabeto">
        <div>
          {alfabeto.map((letra) => (
            <button
              className="letras"
              onClick={() => selecionarLetra(letra)}
              disabled={
                !iniciaJogo ||
                letraErrada.includes(letra) ||
                palavraEscondida === palavraSorteada ||
                (chutou === true && chute !== palavraSorteada) ||
                (chutou === true && chute === palavraSorteada) ||
                imagemErros === forca6 
              }
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
          disabled={
            !iniciaJogo ||
            palavraEscondida === palavraSorteada ||
            (chutou === true && chute !== palavraSorteada) ||
            (chutou === true && chute === palavraSorteada) ||
            imagemErros === forca6
          }
          value={chutou === true ? "" : chute}
          onChange={(event) => setChute(event.target.value)}
        />
        <button className="btn-chutar" onClick={() => setChutou(true)}>
          Chutar
        </button>
      </div>
    </div>
  );
}

function Palavra({ cor, conteudo }) {
  return <span className={cor}>{conteudo}</span>;
}

function Imagem({ imagem }) {
  return <img src={imagem} />;
}
