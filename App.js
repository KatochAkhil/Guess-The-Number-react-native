import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import Gameoverscreen from "./screens/Gameoverscreen";
import Gamescreen from "./screens/Gamescreen";
import StartScreen from "./screens/StartScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);

  const newGameHandler = () => {
    setGuessRound(0);
    setUserNumber(null);
  };

  const startGame = (selected) => {
    setUserNumber(selected);
  };
  const gameoverHandler = (rounds) => {
    setGuessRound(rounds);
  };
  let content = <StartScreen OnStartGame={startGame} />;
  if (userNumber && guessRound <= 0) {
    content = (
      <Gamescreen userChoice={userNumber} onGameover={gameoverHandler} />
    );
  } else if (guessRound > 0) {
    content = (
      <Gameoverscreen
        roundNumber={guessRound}
        userNumber={userNumber}
        onRestart={newGameHandler}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      {content}
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
