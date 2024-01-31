import {
  View,
  ScrollView,
  Button,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import tabletopGames from "../data/games";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";

let owners = tabletopGames.map((game) => game.owner);
let uniqueOwners = [...new Set(owners)];

const data = uniqueOwners.map((owner) => {
  return { label: owner, value: 1 };
});

const NewGame = () => {
  const [gameName, setGameName] = useState("");
  const [gameDescription, setGameDescription] = useState("");
  const [gameImage, setGameImage] = useState("");
  const [gameMinPlayers, setGameMinPlayers] = useState(0);
  const [gameMaxPlayers, setGameMaxPlayers] = useState(0);
  const [gameOwner, setGameOwner] = useState("");
  const [newOwner, setNewOwner] = useState(null);

  const addGame = () => {
    let data = {
      id: tabletopGames.length,
      name: gameName,
      description: gameDescription,
      image: gameImage,
      minPlayers: gameMinPlayers,
      maxPlayers: gameMaxPlayers,
      owner: newOwner ? newOwner : gameOwner,
    };
    tabletopGames.push(data);
    console.log(tabletopGames);
  };
  return (
    <ScrollView style={{ paddingVertical: 25, paddingHorizontal: 15 }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
          borderBottomWidth: 2,
          width: 350,
          paddingLeft: 10,
          marginBottom: 50,
        }}
      >
        Add New Game
      </Text>
      <Text style={{ fontSize: 15, paddingLeft: 10, marginBottom: 4 }}>
        Game name
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          width: 350,
          marginLeft: 10,
          paddingHorizontal: 10,
          paddingVertical: 5,
          marginBottom: 20,
          borderRadius: 5,
          backgroundColor: "#fadce1",
        }}
        defaultValue={gameName}
        onChangeText={(e) => {
          setGameName(e);
        }}
      ></TextInput>
      <Text style={{ fontSize: 15, paddingLeft: 10, marginBottom: 4 }}>
        Description
      </Text>
      <TextInput
        numberOfLines={3}
        style={{
          borderWidth: 1,
          width: 350,
          marginLeft: 10,
          paddingHorizontal: 10,
          paddingVertical: 5,
          marginBottom: 20,
          borderRadius: 5,
          backgroundColor: "#fadce1",
        }}
        defaultValue={gameDescription}
        onChangeText={(e) => {
          setGameDescription(e);
        }}
      ></TextInput>
      <Text style={{ fontSize: 15, paddingLeft: 10, marginBottom: 4 }}>
        Image URL
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          width: 350,
          marginLeft: 10,
          paddingLeft: 10,
          marginBottom: 20,
          borderRadius: 5,
          backgroundColor: "#fadce1",
        }}
        onChangeText={(e) => {
          setGameImage(e);
        }}
      ></TextInput>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 15, paddingLeft: 10, marginBottom: 4 }}>
            Min Players
          </Text>
          <TextInput
            inputMode="numeric"
            style={{
              borderWidth: 1,
              width: 40,
              paddingHorizontal: 5,
              marginLeft: 10,
              textAlign: "center",
              marginBottom: 20,
              borderRadius: 5,
              backgroundColor: "#fadce1",
            }}
            onChangeText={(e) => {
              setGameMinPlayers(e);
            }}
          ></TextInput>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 15, paddingLeft: 10, marginBottom: 4 }}>
            Max Players
          </Text>
          <TextInput
            inputMode="numeric"
            style={{
              borderWidth: 1,
              width: 40,
              paddingHorizontal: 5,
              marginLeft: 10,
              textAlign: "center",
              marginBottom: 20,
              borderRadius: 5,
              backgroundColor: "#fadce1",
            }}
            onChangeText={(e) => {
              setGameMaxPlayers(e);
            }}
          ></TextInput>
        </View>
      </View>
      <Text style={{ fontSize: 15, paddingLeft: 10, marginBottom: 4 }}>
        Owner
      </Text>
      <DropdownComponent
        val={gameOwner}
        setGameOwner={setGameOwner}
      ></DropdownComponent>
      <Text style={{ fontSize: 15, paddingLeft: 10, marginBottom: 4 }}>
        Add new owner
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          width: 350,
          marginLeft: 10,
          paddingLeft: 10,
          marginBottom: 20,
          borderRadius: 5,
          backgroundColor: "#fadce1",
        }}
        onChangeText={(e) => {
          setNewOwner(e);
        }}
      ></TextInput>
      <Text
        onPress={() => {
          addGame();
        }}
        style={{
          alignSelf: "center",
          backgroundColor: "blue",
          color: "white",
          paddingHorizontal: 12,
          paddingVertical: 7,
          borderRadius: 15,
        }}
      >
        Add game
      </Text>
    </ScrollView>
  );
};

const DropdownComponent = ({ val, setGameOwner }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select owner" : "..."}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setGameOwner(item.label);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    width: 350,
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: "#fadce1",
  },
});

export default NewGame;
