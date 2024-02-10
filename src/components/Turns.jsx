import React, { useState } from "react";
import { View, TouchableOpacity, TextInput, Text, StyleSheet } from "react-native";

const TurnSelector = () => {
    const [players, setPlayers] = useState("");
    const [startingPlayer, setStartingPlayer] = useState("");
    const [turnSelected, setTurnSelected] = useState(false);

    const selectFirstTurn = () => {
        let playersArray = players.split(",");
        let randomPlayer = Math.floor(Math.random() * playersArray.length);
        setStartingPlayer(playersArray[randomPlayer]);
        setTurnSelected(true);
    }

  return (
    <View style={{ alignItems: "center", paddingTop: 50, gap: 10 }}>
      <Text>Introduce los jugadores separados por comas</Text>
      <TextInput
        onChangeText={(e) => {
          setPlayers(e);
        }}
        style={{ borderWidth: 1, padding: 1, width: 300 }}
      ></TextInput>
      <TouchableOpacity onPress={() => {
          selectFirstTurn();
        }}
        style={{
          borderWidth: 1,
          backgroundColor: "red",
          paddingHorizontal: 4,
          paddingVertical: 2,
          borderRadius: 5,
        }} >
        <Text>Who will start?</Text>
      </TouchableOpacity>
      {turnSelected && (
        <Text>{startingPlayer} will start!</Text>
      )}
    </View>
  );
};


export default TurnSelector;
