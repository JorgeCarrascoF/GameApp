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
    <View style={{ alignItems: "center", paddingTop: 40, gap: 10 }}>
      <Text style={{ fontSize: 30, marginBottom: 20, paddingLeft: 15, borderBottomWidth: 1, width: 350, textAlign: 'left', color:'#5899e2', borderColor: '#5899e2' }}>Primer turno</Text>
      <Text>Introduce los jugadores separados por comas</Text>
      <TextInput
        onChangeText={(e) => {
          setPlayers(e);
        }}
        style={{ borderWidth: 1, paddingLeft: 10, borderRadius: 5, padding: 1, width: 300 }}
      ></TextInput>
      <TouchableOpacity onPress={() => {
          selectFirstTurn();
        }}
        style={{
          marginTop: 10,
          backgroundColor: "#5899e2",
          paddingHorizontal: 10,
          paddingVertical: 8,
          borderRadius: 5,
        }} >
        <Text style={{fontWeight: 'bold', color: 'white'}}>Mostrar primer jugador</Text>
      </TouchableOpacity>
      {turnSelected && (
        <Text style={{fontSize: 20, marginTop: 20, color: '#5899e2', fontWeight: 'bold'}}>¡{startingPlayer} empieza!</Text>
      )}
    </View>
  );
};


export default TurnSelector;
