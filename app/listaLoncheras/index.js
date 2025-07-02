import { StyleSheet, View } from "react-native";
import Loncherow from "../../components/Loncherow";

export default function ListaLoncheras() {
  return (
    <View style={styles.container}>
      <Loncherow title="xd" />
      <Loncherow title="tumama" />
      <Loncherow title="marcu" />
      <Loncherow title="selacome" />
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
