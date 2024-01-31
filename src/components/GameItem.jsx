import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText";
import GameStats from "./GameStats";
import { Link, useParams } from "react-router-native";
import tabletopGames from "../data/games";

const GameItem = () => {
  const id = parseInt(useParams().id);
  let game = tabletopGames.filter(gameItem => gameItem.id == id)[0];

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', padding: 4}}>
        <Image
          style={{ width: 220, height: 220, margin: 20, borderRadius: 4 }}
          source={{ uri: game.image }}
        ></Image>
        <StyledText fontSize={"heading"} color={"primary"} fontWeight={"bold"}>
          {game.name}
        </StyledText>
      </View>
      <StyledText>{game.description}</StyledText>
      <GameStats game={game}></GameStats>
      <Link to={'/gamelist'} style={{borderWidth: 2, borderColor: 'red', borderRadius: 5, width: 120, padding: 2, alignItems: 'center', position: 'absolute', marginLeft: 15, top: -15}}>
        <Text>Back to Games</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 50
  },
});

export default GameItem;
