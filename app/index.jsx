import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import FontAwesome6Icon from "@expo/vector-icons/FontAwesome6";
import Row from "../components/Row";
import { useRouter } from "expo-router";
import Temps from "../components/Temps";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MONITOR DE CORAZÓN</Text>
      <Image style={styles.image} source={require("../assets/lonchera.png")} />
      <View>
        <Text style={styles.tempText}>Temperatura</Text>
        <Temps general="3.4" envase="13.0" />
      </View>
      <View style={styles.divider} />
      <Row
        Icon={(props) => <FontAwesome6Icon name="location-dot" {...props} />}
        title="Ubicación"
        status="En tránsito"
      />
      <View style={styles.divider} />
      <Row
        Icon={(props) => <FontAwesome6Icon name="clock" {...props} />}
        title="Duración"
        status="2 h 15 min"
      />
      <View style={styles.divider} />
      <Row
        Icon={(props) => <FontAwesomeIcon name="battery" {...props} />}
        title="Batería"
        status="75 %"
      />
      <View style={styles.divider} />
      <Row
        Icon={(props) => <FontAwesomeIcon name="bell" {...props} />}
        title="Alertas"
        status="Ninguna"
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.navigate("/historial")}
      >
        <Text style={styles.btnText}>VER HISTORIAL</Text>
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
  title: {
    fontSize: 30,
    fontWeight: "600",
  },
  image: {
    width: 210,
    height: 180,
  },
  tempContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  tempText: {
    fontSize: 33,
    alignSelf: "center",
  },
  divider: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 2,
    width: "90%",
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
