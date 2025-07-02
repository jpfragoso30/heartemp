import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Loncherow({ title, id }) {
  const router = useRouter();

  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.navigate("/lonchera")}
      >
        <Text style={styles.btnText}>VER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    borderRadius: 8,
    height: 60,
    paddingHorizontal: 8,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    fontSize: 24,
  },
  btn: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: 80,
    height: 40,
    backgroundColor: "#D1456C",
  },
  btnText: {
    color: "white",
    fontSize: 28,
    fontWeight: 600,
  },
});
