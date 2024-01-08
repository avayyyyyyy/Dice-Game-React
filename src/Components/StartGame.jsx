import { useDispatch } from "react-redux";
import styled from "styled-components";
import { toggleGame } from "../Store/GameStartedStore";

const StartGame = () => {
  const dispatch = useDispatch();

  return (
    <Parent>
      <Container>
        <img src="/src/assets/dices 1.png" alt="" />
        <Child>
          <Heading>DICE GAME</Heading>
          <a
            href="https://avayyyyyyy.github.io/shubhlovesweb3/"
            target="_blank"
            rel="noreferrer"
          >
            By Shubhankit Jain
          </a>
          <Button onClick={() => dispatch(toggleGame())}>Play Game</Button>
        </Child>
      </Container>
    </Parent>
  );
};

export default StartGame;

const Parent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  /* padding: 180px 129px 154px 129px; */
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1180px;
  height: 522px;
  display: flex;
  flex-direction: row;
  /* border: 3px solid black; */
  padding: 25px;
  justify-content: center;
  align-content: center;
`;

const Child = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  p {
    margin-block: 14px;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const Heading = styled.div`
  font-size: 96px;
  font-weight: 700;
`;

const Button = styled.button`
  display: flex;
  width: 220px;
  padding: 10px 18px;
  background-color: black;
  color: white;
  flex-direction: column;
  justify-content: center;
  outline: none;
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: 4px;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: white;
    transition: 0.3s ease-in-out;
    color: #000;
    border: 1px solid black;
  }
`;
