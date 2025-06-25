import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Historial() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Historial XD</Text>

      <TouchableOpacity style={styles.btn} onPress={() => router.navigate("/")}>
        <Text style={styles.btnText}>VER MONITOR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 24,
    gap: 16,
  },
  btn: {
    marginTop: 12,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: "90%",
    height: 60,
    backgroundColor: "#D1456C",
  },
  btnText: {
    color: "white",
    fontSize: 28,
    fontWeight: 600,
  },
});
