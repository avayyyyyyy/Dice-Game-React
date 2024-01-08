import MainPage from "./Components/MainPage";
import StartGame from "./Components/StartGame";
import { useSelector } from "react-redux";

const App = () => {
  const isGameStarted = useSelector((state) => state.gameStarted.value);

  return isGameStarted ? <MainPage /> : <StartGame />;
};

export default App;
