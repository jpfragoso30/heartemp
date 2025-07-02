import { StyleSheet, Text, View } from "react-native";
import Loncherow from "../../components/Loncherow";

export default function ListaLoncheras() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loncheras Activas</Text>
      <Loncherow title="Meli" />
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
  title: {
    fontSize: 28,
  },
  btn: {
    marginTop: 12,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: "100%",
    height: 60,
    backgroundColor: "#D1456C",
  },
  btnText: {
    color: "white",
    fontSize: 28,
    fontWeight: 600,
  },
});
