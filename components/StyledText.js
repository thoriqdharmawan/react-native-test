import * as React from "react";
import { Text, StyleSheet, View } from "react-native";

export function MonoText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}

export function BoxValue(props) {
  const getColor = (condiiton) => {
    if (condiiton === "positif") {
      return { fontSize: 46, color: "#F2A338" };
    } else if (condiiton === "sembuh") {
      return { fontSize: 46, color: "#57C617" };
    } else {
      return { fontSize: 46, color: "#F23838" };
    }
  };

  return (
    <View style={styles.boxValue}>
      <Text style={getColor(props.condiiton)}>{props.value}</Text>
      <Text style={styles.index}>{props.index}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  boxValue: {
    flex: 1,
    width: "100%",
    marginBottom: 10,
  },
  index: {
    fontSize: 19,
    color: "#020202",
    marginTop: 0,
  },
});
