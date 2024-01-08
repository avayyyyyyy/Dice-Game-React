import { configureStore } from "@reduxjs/toolkit";
import GameStarted from "./GameStartedStore";
import ShowRules from "./ShowRules";

const Store = configureStore({
  reducer: {
    gameStarted: GameStarted,
    ShowRules: ShowRules,
  },
});

export default Store;
