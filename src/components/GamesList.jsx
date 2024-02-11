import React, { useEffect, useState, useContext } from "react";
import {
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import GameCard from "./GameCard";
import { Link } from "react-router-native";
import { GamesContext } from "./Main";

const GamesList = () => {
  const { gamesData } = useContext(GamesContext);

  let owners = gamesData.map((game) => game.owner);
  let uniqueOwners = [...new Set(owners)];

  const [filtering, setFiltering] = useState(false);
  const [games, setGames] = useState(gamesData);
  const [seeOwners, setSeeOwners] = useState(true);
  const [ownersFiltered, setOwnersFiltered] = useState([]);
  const [minPlayers, setMinPlayers] = useState(2);
  const [maxPlayers, setMaxPlayers] = useState(5);

  const filterGames = () => {
    let newGames = gamesData.filter(
      (game) =>
        minPlayers >= game.minPlayers &&
        maxPlayers <= game.maxPlayers &&
        (ownersFiltered.length == 0 || ownersFiltered.includes(game.owner))
    );
    setGames(newGames);
  };

  useEffect(() => {
    setGames(gamesData);
  }, [gamesData]);

  useEffect(() => {
    if (filtering) {
      filterGames();
    }
  }, [ownersFiltered, minPlayers, maxPlayers]);

  return (
    <ScrollView style={{ marginBottom: 40 }}>
      {!filtering && (
        <Link
          style={{
            backgroundColor: "#5899e2",
            alignSelf: "flex-end",
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 50,
            position: "absolute",
            zIndex: 1,
            top: 20,
            right: 80,
          }}
          to={"/newgame"}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Añadir</Text>
        </Link>
      )}
      <Text
        style={{
          backgroundColor: "#5899e2",
          color: "white",
          fontWeight: "bold",
          alignSelf: "flex-end",
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 50,
          position: "absolute",
          zIndex: 1,
          top: 20,
          right: 20,
        }}
        onPress={() => {
          setFiltering(!filtering);
          setGames(gamesData);
        }}
      >
        {filtering ? "╳" : "Filtro"}
      </Text>
      {filtering ? (
        <View
          style={{
            justifyContent: "center",
            padding: 5,
            zIndex: 0,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 40,
            }}
          >
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text>Min Jugadores</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableHighlight
                  style={{ borderRadius: 15 }}
                  onPress={() => {
                    let newMinPlayers = minPlayers - 1;
                    if (newMinPlayers > 0) {
                      setMinPlayers(newMinPlayers);
                    }
                  }}
                >
                  <Text
                    style={{
                      backgroundColor: "#5899e2",
                      width: 28,
                      borderRadius: 15,
                      textAlign: "center",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    -
                  </Text>
                </TouchableHighlight>
                <Text
                  style={{
                    borderWidth: 1,
                    padding: 8,
                    margin: 10,
                    borderRadius: 3,
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  {minPlayers}
                </Text>
                <TouchableHighlight
                  style={{ borderRadius: 15 }}
                  onPress={() => {
                    let newMinPlayer = minPlayers + 1;
                    if (newMinPlayer <= maxPlayers) {
                      setMinPlayers(minPlayers + 1);
                    }
                  }}
                >
                  <Text
                    style={{
                      backgroundColor: "#5899e2",
                      width: 28,
                      borderRadius: 15,
                      textAlign: "center",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    +
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text>Max jugadores</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableHighlight
                  style={{ borderRadius: 15 }}
                  onPress={() => {
                    let newMaxPlayers = maxPlayers - 1;
                    if (newMaxPlayers >= minPlayers) {
                      setMaxPlayers(newMaxPlayers);
                    }
                  }}
                >
                  <Text
                    style={{
                      backgroundColor: "#5899e2",
                      width: 28,
                      borderRadius: 15,
                      textAlign: "center",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    -
                  </Text>
                </TouchableHighlight>
                <Text
                  style={{
                    borderWidth: 1,
                    padding: 8,
                    margin: 10,
                    borderRadius: 3,
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  {maxPlayers}
                </Text>
                <TouchableHighlight
                  style={{ borderRadius: 15 }}
                  onPress={() => {
                    setMaxPlayers(maxPlayers + 1);
                  }}
                >
                  <Text
                    style={{
                      backgroundColor: "#5899e2",
                      width: 28,
                      borderRadius: 15,
                      textAlign: "center",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    +
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 15, marginLeft: 15 }}>
            <Text
              onPress={() => {
                setSeeOwners(!seeOwners);
              }}
              style={{ marginVertical: 10 }}
            >
              Propietarios {!seeOwners && "   . . ."}
            </Text>
            {seeOwners && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                }}
              >
                {uniqueOwners.map((owner) => (
                  <Text
                    onPress={() => {
                      if (ownersFiltered.includes(owner)) {
                        let newOwnersFiltered = ownersFiltered.filter(
                          (item) => item != owner
                        );
                        setOwnersFiltered(newOwnersFiltered);
                      } else {
                        let newOwnersFiltered = [...ownersFiltered];
                        newOwnersFiltered.push(owner);
                        setOwnersFiltered(newOwnersFiltered);
                      }
                    }}
                    style={{
                      borderWidth: 1,
                      padding: 1,
                      marginLeft: 10,
                      width: 60,
                      borderRadius: 3,
                      textAlign: "center",
                      backgroundColor: ownersFiltered.includes(owner)
                        ? "#5899e2"
                        : "white",
                    }}
                  >
                    {owner}
                  </Text>
                ))}
              </View>
            )}
          </View>
        </View>
      ) : (
        ""
      )}
      <Text
        style={{
          alignSelf: "flex-start",
          fontWeight: "bold",
          fontSize: 15,
          width: 180,
          textAlign: "left",
          paddingHorizontal: 10,
          paddingVertical: 3,
          borderBottomColor: "#5899e2",
          borderBottomWidth: 1,
          marginTop: 20,
          marginLeft: 20,
          marginBottom: 10,
        }}
      >
        Juegos: {games.length}
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          paddingHorizontal: 16,
          paddingBottom: 20,
        }}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </View>
    </ScrollView>
  );
};

export default GamesList;
