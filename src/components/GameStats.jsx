import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

const GameStats = ({ game }) => {
    return (
      <View style={{ flexDirection: "row", marginTop: 5, justifyContent: "space-around" }}>
        <View>
          <StyledText fontWeight={'bold'}>Players</StyledText>
          <StyledText>{game.minPlayers} - {game.maxPlayers} </StyledText>
        </View>
        <View>
          <StyledText fontWeight={'bold'}>Last Played</StyledText>
          <StyledText>{game.lastTimePlayed}</StyledText>
        </View>
        <View>
          <StyledText fontWeight={'bold'}>Owner</StyledText>
          <StyledText>{game.owner}</StyledText>
        </View>
      </View>
    );
};

export default GameStats;