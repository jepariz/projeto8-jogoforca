import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

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
  return (
    <ContainerJogo>
      <GlobalStyle />
      <ContainerImagem>
        <img src={forca0} />
        <button>Escolher Palavra</button>
      </ContainerImagem>
      <ContainerAlfabeto>
        <div>
          {alfabeto.map((letra) => (
            <button>
              <li>{letra.toUpperCase()}</li>
            </button>
          ))}
        </div>
      </ContainerAlfabeto>
      <ContainerInput>
        <p>Já sei a palavra!</p>
        <input />
        <button>Chutar</button>
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

  button {
    margin-top: 17px;
    width: 140px;
    height: 40px;
    background-color: #50c878;
    border: none;
    border-radius: 7px;
    color: #fff;
    font-weight: 700;
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
  button {
    width: 30px;
    height: 30px;
    background-color: #b1b1b1;
    border: none;
    border-radius: 2px;
  }

  li {
    font-weight: 700;
    color: #808080;
  }
`;

const ContainerInput = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  gap: 20px;

  input {
    width: 250px;
    height: 25px;
    border: 2px solid #b1b1b1;
    border-radius: 5px;
  }

  button {
    width: 70px;
    height: 40px;
    background-color: #e8f4f8;
    border: 2px solid lightblue;
    border-radius: 5px;
    color: #30829d;
    font-weight: 700;
  }
`;
