import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Gameoverscreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Game is over </Text>
      <Text style={styles.title}>The Number was {props.roundNumber} </Text>
      <Text style={styles.title}>The Game is over{props.userNumber} </Text>

      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
});

export default Gameoverscreen;
