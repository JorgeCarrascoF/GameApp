import React, { useState } from "react";
import {
  View,
  Text,
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
    if (newPlayer !== "") {
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
    <ScrollView
      contentContainerStyle={{ alignItems: "center" }}
      style={{ marginTop: 20, paddingTop: 20 }}
    >
      <Text
        style={{
          fontSize: 30,
          marginBottom: 30,
          paddingLeft: 15,
          borderBottomWidth: 1,
          width: 350,
          textAlign: "left",
          color: "#5899e2",
          borderColor: "#5899e2",
        }}
      >
        Puntuaciones
      </Text>
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
          style={{
            width: 200,
            marginRight: 10,
            borderWidth: 1,
            borderRadius: 5,
            paddingLeft: 8,
          }}
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
              borderRadius: 20,
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: "#5899e2",
              textAlign: "center",
            }}
          >
            Añadir
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
        marginBottom: 15,
        width: 330,
        backgroundColor: "#EeEeEe",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 10,
      }}
    >
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableHighlight
          onPress={() => {
            deletePlayer(player);
          }}
          style={{ marginRight: 15, width: 20 }}
        >
          <Image
            source={require("../img/delete.png")}
            style={{ width: 20, height: 20 }}
          ></Image>
        </TouchableHighlight>
        <Text style={{ fontSize: 18 }}>{player}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableHighlight
          onPress={decrementPoints}
          style={{ backgroundColor: "#5899e2", width: 20, borderRadius: 15}}
        >
          <Text style={{ textAlign: "center", color: "white" }}>-</Text>
        </TouchableHighlight>
        <Text style={{ marginHorizontal: 10, color: "#5899e2", fontSize: 20 }}>
          {points}
        </Text>
        <TouchableHighlight
          onPress={incrementPoints}
          style={{ backgroundColor: "#5899e2", width: 20, borderRadius: 15 }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>+</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default PointTracker;
