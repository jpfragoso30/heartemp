import { StyleSheet, Text, View } from "react-native";

export default function Row({ Icon, title, status }) {
  return (
    <View style={styles.row}>
      <View style={styles.matter}>
        {Icon({ style: styles.icon })}
        <Text style={styles.matterTitle}>{title}</Text>
      </View>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    width: 50,
  },
  matterTitle: {
    fontSize: 28,
    fontWeight: 500,
  },
  status: {
    fontSize: 28,
    fontWeight: 300,
    paddingRight: 8,
    letterSpacing: -1,
  },
});
