/** @format */

import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Temps(props) {
  const [selectedTemp, setSelectedTemp] = useState("general");
  const [temps, setTemps] = useState([
    {
      name: "general",
      selected: true,
    },
    {
      name: "envase",
      selected: false,
    },
  ]);

  const handleSelect = (selectedName) => {
    setTemps((prev) =>
      prev.map(({ name }) => ({
        name,
        selected: selectedName === name ? true : false,
      }))
    );
    setSelectedTemp(selectedName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.degrees}>
        {props[selectedTemp]} <Text style={styles.c}>°C</Text>
      </Text>
      <View style={styles.tempBtns}>
        {temps.map(({ name, selected }) => (
          <TouchableOpacity
            key={name}
            style={styles.tempSwapBtn(selected)}
            onPress={() => handleSelect(name)}
          >
            <Text style={styles.tempBtnText(selected)}>
              {name.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  degrees: {
    fontSize: 70,
    fontWeight: "700",
    color: "#D1456C",
  },
  c: {
    fontSize: 60,
    fontWeight: "500",
    color: "#D1456C",
    letterSpacing: -2,
  },
  tempBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    gap: 8,
  },
  tempSwapBtn: (selected) => ({
    borderRadius: 8,
    backgroundColor: selected ? "#D1456C" : "white",
    borderColor: "#D1456C",
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 18,
    width: "50%",
  }),
  tempBtnText: (selected) => ({
    color: selected ? "white" : "#D1456C",
    alignSelf: "center",
  }),
});
