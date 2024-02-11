import React from "react";
import { View, Image, Text } from "react-native";
import { Link } from "react-router-native";

const Tools = () => {
  return (
    <View
      style={{
        height: "95%",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Link to={"/teams"}>
        <View style={{flexDirection: 'column'}}>
          <Image
            source={require("../img/team.png")}
            style={{ width: 100, height: 100, marginBottom: 5 }}
          />
          <Text style={{ textAlign: "center" }}>Formar equipos</Text>
        </View>
      </Link>
      <Link to={"/rolldice"}>
        <View style={{flexDirection: 'column'}}>
          <Image
            source={require("../img/dice.png")}
            style={{ width: 100, height: 100, marginBottom: 5}}
          />
          <Text style={{ textAlign: "center" }}>Dados</Text>
        </View>
      </Link>
      <Link to={"/turns"}>
        <View style={{flexDirection: 'column'}}>
          <Image
            source={require("../img/turn.png")}
            style={{ width: 100, height: 100, marginBottom: 5 }}
          />
          <Text style={{ textAlign: "center" }}>Primer turno</Text>
        </View>
      </Link>
      <Link to={"/points"}>
        <View style={{flexDirection: 'column'}}>
          <Image
            source={require("../img/points.png")}
            style={{ width: 100, height: 100, marginBottom: 5 }}
          />
          <Text style={{ textAlign: "center" }}>Puntuaciones</Text>
        </View>
      </Link>
    </View>
  );
};

export default Tools;
