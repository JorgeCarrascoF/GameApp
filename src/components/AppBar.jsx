import React from "react";
import { View, Image } from "react-native";
import { Link } from "react-router-native";
const AppBar = () => {
  return (
    <View
      style={{
        backgroundColor: "#5899e2",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        opacity: 1,
        width: "100%",
        position: "absolute",
        bottom: 0,
        zIndex: 10,
      }}
    >

        <Link to={"/"} underlayColor={"transparent"}>
          <Image
            source={require("../img/games.png")}
            style={{ width: 30, height: 30 }}
          />
        </Link>
        <Link to={"/tools"} underlayColor={"transparent"}> 
          <Image
            source={require("../img/tool.png")}
            style={{ width: 30, height: 30 }}
          />
        </Link>
    </View>
  );
};

export default AppBar;
