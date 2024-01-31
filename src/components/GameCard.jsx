import React from "react";
import { View, StyleSheet, Image } from "react-native";
import {Link} from 'react-router-native';
import StyledText from "./StyledText";

const GameCard = ({ game }) => {
  return (
    <View key={game.id} style={styles.container}>
      <View
        style={{ height: 100, width: 100, alignItems: "center", margin: 5, marginBottom: 30 }}
      >
        <Link to={`/game/${game.id}`}>
          <Image
            style={{ width: "100%", aspectRatio: "1/1", borderRadius: 4 }}
            source={{ uri: game.image }}
          ></Image>
        </Link>
        <StyledText fontWeight={"bold"} color={"primary"}>
          {game.name}
        </StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default GameCard;
