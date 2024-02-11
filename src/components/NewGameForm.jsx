import { View, ScrollView, Text, TextInput, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useState, useContext } from "react";
import { GamesContext } from "./Main";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { redirect } from "react-router-native";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      message={props.text1}
      style={{
        borderLeftColor: "green",
        position: "absolute",
        top: -40,
        width: "100%",
        fontSize: 15,
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      message={props.text1}
      style={{
        borderLeftColor: "red",
        position: "absolute",
        top: -40,
        width: "100%",
        fontSize: 15,
      }}
    />
  ),
  noGameToast: (props) => (
    <BaseToast
      {...props}
      message={props.text1}
      style={{
        borderLeftColor: "red",
        position: "absolute",
        top: -40,
        width: "100%",
        fontSize: 15,
      }}
    />
  ),
};

const NewGameForm = () => {
  const { gamesData, setGamesData } = useContext(GamesContext);
  let owners = gamesData.map((game) => game.owner);
  let uniqueOwners = [...new Set(owners)];

  const showToast = (type) => {
    if (type == 'success') {
      Toast.show({
        type: "success",
        visibilityTime: 3000,
        autoHide: true,
        text1: "Juego añadido!",
      });
    } else  if (type == 'no game') {
      Toast.show({
        type: "noGameToast",
        visibilityTime: 3000,
        autoHide: true,
        text1: "Debes añadir por lo menos el nombre y el número de jugadores!",
      });
    } else if (type == 'error') {
      Toast.show({
        type: "error",
        visibilityTime: 3000,
        autoHide: true,
        text1: "Ya has añadido ese juego!",
      });
    }
  };

  const data = uniqueOwners.map((owner) => {
    return { label: owner, value: 1 };
  });

  const [gameName, setGameName] = useState("");
  const [gameDescription, setGameDescription] = useState("");
  const [gameImage, setGameImage] = useState("");
  const [gameMinPlayers, setGameMinPlayers] = useState(0);
  const [gameMaxPlayers, setGameMaxPlayers] = useState(0);
  const [gameOwner, setGameOwner] = useState("");
  const [newOwner, setNewOwner] = useState(null);

  const [gameAdded, setGameAdded] = useState(false);

  const resetForm = () => {
    setGameName("");
    setGameDescription("");
    setGameImage("");
    setGameMinPlayers(0);
    setGameMaxPlayers(0);
    setGameOwner("");
    setNewOwner(null);
    setGameAdded(false);
  };

  const addGame = async () => {
    if (gameName == "" || gameMinPlayers == 0 || gameMaxPlayers == 0) {
      showToast('no game');
    } else {
      setGameAdded(true);
      let data = {
        id: gamesData.length,
        name: gameName,
        description: gameDescription,
        image: gameImage == '' ? "https://miro.medium.com/v2/0*ZjYSm_q36J4KChdn" : gameImage,
        minPlayers: gameMinPlayers,
        maxPlayers: gameMaxPlayers,
        owner: newOwner ? newOwner : gameOwner == '' ? "Jorge" : gameOwner,
      };
      gamesData.push(data);
      setGamesData(gamesData);
      await AsyncStorage.setItem("games", JSON.stringify(gamesData));
      showToast('success');
      redirect("/gamelist");
    }
  };
  return (
    <ScrollView
      style={{ paddingVertical: 25, paddingHorizontal: 15, zIndex: 1 }}
    >
      <Text
        style={{ fontSize: 30, marginBottom: 20, paddingLeft: 15, borderBottomWidth: 1, width: 350, textAlign: 'left', color:'#5899e2', borderColor: '#5899e2' }}
      >
        Añadir juego nuevo
      </Text>
      <Toast config={toastConfig} />
      <Text style={{ fontSize: 15, paddingLeft: 10, marginBottom: 4 }}>
        Nombre
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
          backgroundColor: "#d7e7fa",
        }}
        defaultValue={gameName}
        onChangeText={(e) => {
          setGameName(e);
        }}
      ></TextInput>
      <Text style={{ fontSize: 15, paddingLeft: 10, marginBottom: 4 }}>
        Descripción
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
          backgroundColor: "#d7e7fa",
        }}
        defaultValue={gameDescription}
        onChangeText={(e) => {
          setGameDescription(e);
        }}
      ></TextInput>
      <Text style={{ fontSize: 15, paddingLeft: 10, marginBottom: 4 }}>
        URL de imagen
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          width: 350,
          marginLeft: 10,
          paddingLeft: 10,
          marginBottom: 20,
          borderRadius: 5,
          backgroundColor: "#d7e7fa",
        }}
        defaultValue={gameImage}
        onChangeText={(e) => {
          setGameImage(e);
        }}
      ></TextInput>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 15, paddingLeft: 10, marginBottom: 4 }}>
            Min Jugadores
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
              backgroundColor: "#d7e7fa",
            }}
            onChangeText={(e) => {
              setGameMinPlayers(e);
            }}
          ></TextInput>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 15, paddingLeft: 10, marginBottom: 4 }}>
            Max Jugadores
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
              backgroundColor: "#d7e7fa",
            }}
            onChangeText={(e) => {
              setGameMaxPlayers(e);
            }}
          ></TextInput>
        </View>
      </View>
      <Text style={{ fontSize: 15, paddingLeft: 10, marginBottom: 4 }}>
        Propietario
      </Text>
      <DropdownComponent
        data={data}
        setGameOwner={setGameOwner}
      ></DropdownComponent>
      <Text style={{ fontSize: 15, paddingLeft: 10, marginBottom: 4 }}>
        Añadir nuevo propietario
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          width: 350,
          marginLeft: 10,
          paddingLeft: 10,
          marginBottom: 20,
          borderRadius: 5,
          backgroundColor: "#d7e7fa",
        }}
        onChangeText={(e) => {
          setNewOwner(e);
        }}
      ></TextInput>
      <Text
        onPress={() => {
          if (!gameAdded) {
            addGame();
          } else {
            showToast('error');
          }
        }}
        style={{
          alignSelf: "center",
          backgroundColor: gameAdded ? "grey" : "#5899e2",
          color: "white",
          paddingHorizontal: 12,
          paddingVertical: 7,
          borderRadius: 15,
        }}
      >
        Añadir juego
      </Text>
      {gameAdded && (
        <Text
          onPress={() => {
            resetForm();
          }}
          style={{
            alignSelf: "center",
            backgroundColor: "#5899e2",
            color: "white",
            marginTop: 10,
            paddingHorizontal: 12,
            paddingVertical: 7,
            borderRadius: 15,
          }}
        >
          Añadir otro juego
        </Text>
      )}
    </ScrollView>
  );
};

const DropdownComponent = ({ data, setGameOwner }) => {
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
        placeholder={!isFocus ? "Seleccionar propietario" : "..."}
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
    backgroundColor: "#d7e7fa",
  },
});

export default NewGameForm;
