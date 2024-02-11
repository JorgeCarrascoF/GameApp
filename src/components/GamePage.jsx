import { React, useState, useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import GameStats from "./GameStats";
import { Link, redirect, useParams } from "react-router-native";
import { GamesContext } from "./Main";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast, { BaseToast } from "react-native-toast-message";

const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      message={props.text1}
      style={{
        borderLeftColor: "green",
        position: "absolute",
        top: -20,
        width: "90%",
        fontSize: 15,
      }}
    />
  ),
};
const GamePage = () => {
  const id = parseInt(useParams().id);
  const { gamesData, setGamesData } = useContext(GamesContext);
  let game = gamesData.filter((gameItem) => gameItem.id == id)[0];

  const [deleting, setDeleting] = useState(false);

  const deleteGame = async (id) => {
    let newGames = gamesData.filter((game) => game.id !== id);
    setGamesData(newGames);
    await AsyncStorage.setItem("games", JSON.stringify(newGames));
    Toast.show({
      type: "success",
      text1: "Game deleted",
      visibilityTime: 2000,
    });
    redirect("/gamelist");
  };

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        padding: 10,
        marginTop: 20,
        zIndex: 0,
      }}
    >
      {deleting && (
        <View
          style={{
            width: "80%",
            height: 200,
            position: "absolute",
            top: 100,
            left: 50,
            zIndex: 2,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: "#5899e2",
              padding: 10,
            }}
          >
            {`¿Seguro que quieres borrar ${game.name}?`}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
              marginTop: 30,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setDeleting(false);
                deleteGame(id);
              }}
            >
              <Text style={{ color: "red" }}>Sí, bórralo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDeleting(false);
              }}
            >
              <Text>No, no quiero</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <Link to={"/"} underlayColor={"transparent"}>
          <Image
            source={require("../img/arrow-left.png")}
            style={{ width: 30, height: 30 }}
          />
        </Link>
        <TouchableOpacity
          onPress={() => {
            setDeleting(true);
          }}
        >
          <Image
            source={require("../img/delete.png")}
            style={{ width: 30, height: 30 }}
          ></Image>
        </TouchableOpacity>
      </View>
      {game && (
        <View>
          <View style={{ alignItems: "center", padding: 4 }}>
            <Image
              style={{ width: 350, height: 350, margin: 20, borderRadius: 4 }}
              source={{ uri: game.image }}
            ></Image>
            <Text
              style={{ fontSize: 30, fontWeight: "bold", color: "#5899e2" }}
            >
              {game.name}
            </Text>
          </View>
          <Text
            style={{
              width: "100%",
              textAlign: "center",
              paddingHorizontal: 10,
            }}
          >
            {game.description}
          </Text>
          <GameStats game={game}></GameStats>
        </View>
      )}
      <Toast config={toastConfig} />
    </View>
  );
};

export default GamePage;
