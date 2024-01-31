import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import tabletopGames from "../data/games";
import GameCard from "./GameCard";
import StyledText from "./StyledText";
import { Link } from "react-router-native";

const GamesList = () => {
  let owners = tabletopGames.map((game) => game.owner);
  let uniqueOwners = [...new Set(owners)];

  const [filtering, setFiltering] = useState(false);
  const [games, setGames] = useState(tabletopGames);
  const [seeOwners, setSeeOwners] = useState(true);
  const [ownersFiltered, setOwnersFiltered] = useState([]);
  const [minPlayers, setMinPlayers] = useState(2);
  const [maxPlayers, setMaxPlayers] = useState(5);

  const filterGames = () => {
    let newGames = tabletopGames.filter(
      (game) =>
        minPlayers >= game.minPlayers &&
        maxPlayers <= game.maxPlayers &&
        (ownersFiltered.length == 0 || ownersFiltered.includes(game.owner))
    );
    setGames(newGames);
  };

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
            backgroundColor: "blue",

            alignSelf: "flex-end",
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 50,
            position: "absolute",
            zIndex: 1,
            top: 20,
            right: 80,
          }}
          to={'/newgame'}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>New game</Text>
        </Link>
      )}
      <Text
        style={{
          backgroundColor: "blue",
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
          setGames(tabletopGames);
        }}
      >
        {filtering ? "╳" : "Filter"}
      </Text>
      {filtering ? (
        <View
          style={{
            backgroundColor: "pink",
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
              <Text>Min Players</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Button
                  title="-"
                  style={{ borderRadius: 4 }}
                  onPress={() => {
                    let newMinPlayers = minPlayers - 1;
                    if (newMinPlayers > 0) {
                      setMinPlayers(newMinPlayers);
                    }
                  }}
                ></Button>
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
                <Button
                  title="+"
                  onPress={() => {
                    let newMinPlayer = minPlayers + 1;
                    if (newMinPlayer <= maxPlayers) {
                      setMinPlayers(minPlayers + 1);
                    }
                  }}
                ></Button>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text>Max Players</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Button
                  title="-"
                  style={{ borderRadius: 4 }}
                  onPress={() => {
                    let newMaxPlayers = maxPlayers - 1;
                    if (newMaxPlayers >= minPlayers) {
                      setMaxPlayers(newMaxPlayers);
                    }
                  }}
                ></Button>
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
                <Button
                  title="+"
                  onPress={() => {
                    setMaxPlayers(maxPlayers + 1);
                  }}
                ></Button>
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
                        ? "red"
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
          borderBottomColor: "blue",
          borderBottomWidth: 1,
          marginTop: 20,
          marginLeft: 20,
        }}
      >
        Total games: {games.length}
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </View>
    </ScrollView>
  );
};

export default GamesList;
