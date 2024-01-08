import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggleShowRules } from "../Store/ShowRules";

const MainPage = () => {
  const arrNum = [1, 2, 3, 4, 5, 6];
  const [num, setNum] = useState(undefined);
  const [score, setScore] = useState(0);
  const [dicNum, setDiceNum] = useState(1);

  const showRules = useSelector((state) => state.ShowRules.value);
  const dispatch = useDispatch();

  function rollDice() {
    if (!num) {
      return;
    }
    let RandomNumber = Math.floor(Math.random() * (7 - 1) + 1);
    setDiceNum(RandomNumber);

    if (num == RandomNumber) {
      setScore(score + RandomNumber);
    } else {
      setScore(score - 2);
    }
    setNum(undefined);
  }

  return (
    <Parent>
      <Navbar>
        <ScoreContainer>
          <NumScoreNumeric>{score}</NumScoreNumeric>
          <NumHeading>Total Score</NumHeading>
        </ScoreContainer>
        <SelectNumberGroup>
          {showRules ? (
            <h6>Select Number From Here!</h6>
          ) : (
            <hw>Select Number From Here</hw>
          )}
          <SelectNumber>
            {arrNum.map((value, i) => (
              <SmallBox
                onClick={() => {
                  setNum(value);
                }}
                key={i}
                isSelected={value === num}
              >
                {value}
              </SmallBox>
            ))}
          </SelectNumber>
          <NumHeading>Selected Number: {num}</NumHeading>
        </SelectNumberGroup>
      </Navbar>
      <LowerDiv>
        {dicNum ? (
          <img
            onClick={rollDice}
            src={`src/assets/dice/dice_${dicNum}.png`}
            alt=""
          />
        ) : (
          <Button>Click Here To Roll Dice</Button>
        )}
        <InsDiv>Click On The Dice</InsDiv>
        <Button onClick={() => dispatch(toggleShowRules())}>
          {showRules ? "Hide Rules" : "Show Rules"}
        </Button>
        {showRules ? (
          <RulesMain>
            <h1>How to play Dice Game</h1>
            <div>
              <p>- Select any number</p>
              <p>- Click on dice image</p>
              <p>
                - After click on dice if selected number is equal to dice number
                you will get same point as dice{" "}
              </p>
              <p>- If you get wrong guess then 2 point will be dedcuted </p>
            </div>
          </RulesMain>
        ) : null}
      </LowerDiv>
    </Parent>
  );
};

export default MainPage;

const RulesMain = styled.div`
  display: inline-flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  background: #fbf1f1;
  border-radius: 8px;
  gap: 24px;

  h1 {
    color: #000;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const InsDiv = styled.h6`
  color: #000;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Parent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  /* justify-content: space-between; */
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  width: 220px;
  padding: 10px 18px;
  background-color: black;
  color: white;
  font-size: 16px;
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
    /* transition: 0.3s ease-in-out; */
    color: #000;
    border: 1px solid black;
  }
`;

const LowerDiv = styled.div`
  top: 40px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;

const ScoreContainer = styled.div`
  display: flex;
  /* height: 72px; */
  /* margin-block: 5px; */
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;
const NumScoreNumeric = styled.h1`
  font-weight: 400;
  font-size: 80px;
`;

const NumHeading = styled.p`
  font-size: 24px;
  text-align: right !important;
`;

const SelectNumberGroup = styled.div`
  width: 552px;
  gap: 3px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  h6 {
    color: #ff0c0c;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  hw {
    height: 21px;
    color: transparent;
    user-select: none;
  }
`;

const SelectNumber = styled.div`
  width: 100%;
  gap: 3px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const SmallBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  font-weight: bold;
  user-select: none;
  border: 1px solid black;
  /* padding: 18px 0px; */
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isSelected ? "Black" : "White")};
  color: ${(props) => (props.isSelected ? "White" : "Black")};
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Navbar = styled.div`
  width: 100%;
  padding-inline: 10px;
  display: flex;
  margin-bottom: 60px;
  justify-content: space-between;
  align-content: center;
`;
