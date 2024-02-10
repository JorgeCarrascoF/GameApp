import React from "react";
import { View, Text } from "react-native";
import { Link } from "react-router-native";

const Tools = () => {
  return (
    <View>
      <Link to={"/teams"}>
        <Text>Team Division</Text>
      </Link>
      <Link to={"/rolldice"}>
        <Text>Dice Roller</Text>
      </Link>
      <Link to={"/turns"}>
        <Text>Turn Order</Text>
      </Link>
      <Link to={"/points"}>
        <Text>Points Tracker</Text>
      </Link>
    </View>
  );
};

export default Tools;
