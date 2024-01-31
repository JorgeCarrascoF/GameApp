import React from "react";
import { Text, StyleSheet } from "react-native";

import theme from "../theme";

const style = StyleSheet.create({
  text: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.body,
    width: '100%',
    textAlign: 'center',
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.secondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  heading: {
    fontSize: theme.fontSizes.heading,
  },
  small: {
    fontSize: theme.fontSizes.small,
  },
});

export default function StyledText({ children, color, fontSize, fontWeight, ...restOfProps }) {
  const textStyles = [
    style.text,
    color === "primary" && style.colorPrimary,
    color === "secondary" && style.colorSecondary,
    fontSize === "heading" && style.heading,
    fontSize === "small" && style.small,
    fontWeight === "bold" && style.bold,
  ];
  return <Text style={textStyles} {...restOfProps}>{children}</Text>;
}
