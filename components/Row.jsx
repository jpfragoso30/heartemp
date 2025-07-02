import { StyleSheet, Text, View } from "react-native";

export default function Row({ Icon, status }) {
  return (
    <View style={styles.row}>
      <View style={styles.matter}>{Icon({ style: styles.icon })}</View>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 18,
  },
  matter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  icon: {
    fontSize: 32,
    color: "#D1456C",
    width: 60,
  },
  status: {
    fontSize: 20,
    fontWeight: 300,
    paddingRight: 8,
    letterSpacing: -1,
    flex: 1,
    flexWrap: "wrap",
  },
});
