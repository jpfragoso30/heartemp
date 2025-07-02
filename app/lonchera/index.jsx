import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import FontAwesome6Icon from "@expo/vector-icons/FontAwesome6";
import Row from "../../components/Row";
import Temps from "../../components/Temps";
import { useMonitor } from "../../hooks/useMonitor";

export default function Lonchera() {
  const { latestData, fetchLatest, isRefreshing } = useMonitor();

  return (
    <ScrollView
      contentContainerStyle={[styles.container]}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={fetchLatest} />
      }
    >
      <Text style={styles.title}>MONITOR DE CORAZÓN</Text>
      <Image
        style={styles.image}
        source={require("../../assets/lonchera.png")}
      />
      <View>
        <Text style={styles.tempText}>Temperatura</Text>
        <Temps general={latestData?.general} envase={latestData?.envase} />
      </View>
      <View style={styles.divider} />
      <View style={styles.locationWrapper}>
        <Row
          Icon={(props) => <FontAwesome6Icon name="location-dot" {...props} />}
          status={latestData?.location}
        />
      </View>
      <View style={styles.divider} />
      <View style={styles.duoWrapper}>
        <View style={styles.halfRow}>
          <Row
            Icon={(props) => <FontAwesomeIcon name="battery" {...props} />}
            status={latestData?.bateria}
          />
        </View>
        <View style={styles.halfRow}>
          <Row
            Icon={(props) => <FontAwesome6Icon name="clock" {...props} />}
            status={latestData?.duration}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  halfRow: {
    width: "50%",
  },
  duoWrapper: {
    flexDirection: "row",
  },
  locationWrapper: {
    width: "100%",
  },
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
});
