import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  TouchableHighlight,
  ScrollView,
} from "react-native";

const PointTracker = () => {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState("");

  const addNewPlayer = () => {
    if(newPlayer !== ""){
      let newPlayersArray = players;
      newPlayersArray.push(newPlayer);
      setPlayers(newPlayersArray);
      setNewPlayer("");
    }
  };

  const deletePlayer = (player) => {
    let newPlayersArray = players.filter((p) => p !== player);
    setPlayers(newPlayersArray);
  };

  return (
    <ScrollView contentContainerStyle={{alignItems: 'center'}} style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 30, marginBottom: 20, paddingLeft: 15, borderBottomWidth: 1, width: 350, textAlign: 'left' }}>Puntuaciones</Text>
      {players.map((player) => (
        <PlayerPunctuation
          player={player}
          deletePlayer={deletePlayer}
        ></PlayerPunctuation>
      ))}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          onChangeText={(e) => {
            setNewPlayer(e);
          }}
          style={{ width: 200, marginRight: 10, borderWidth: 1 }}
        >
          {newPlayer}
        </TextInput>
        <TouchableWithoutFeedback
          onPress={() => {
            addNewPlayer();
          }}
        >
          <Text
            style={{
              borderWidth: 2,
              borderRadius: 20,
              width: 23,
              textAlign: "center",
            }}
          >
            +
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
};

const PlayerPunctuation = ({ player, deletePlayer }) => {
  const [points, setPoints] = useState(0);
  const incrementPoints = () => {
    setPoints(points + 1);
  };

  const decrementPoints = () => {
    setPoints(points - 1);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 20,
        width: 220,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "lightgrey",
        paddingHorizontal: 5,
        paddingVertical: 1,
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 18 }}>{player}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableHighlight onPress={incrementPoints}>
          <Text>+</Text>
        </TouchableHighlight>
        <Text style={{ marginHorizontal: 5 }}>{points}</Text>
        <TouchableHighlight onPress={decrementPoints}>
          <Text>-</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            deletePlayer(player);
          }}
        >
          <Image
            source={require("../img/delete.png")}
            style={{ width: 20, height: 20, marginLeft: 10 }}
          ></Image>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default PointTracker;
