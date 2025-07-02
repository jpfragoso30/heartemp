import { Slot, usePathname, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useStore } from "../hooks/useStore";
import { createContext } from "react";
import FontAwesome6Icon from "@expo/vector-icons/FontAwesome6";
import FontAwesome5Icon from "@expo/vector-icons/FontAwesome5";

export const Context = createContext(null);

export default function Layout() {
  const { store, updateStore } = useStore();
  const router = useRouter();
  const pathname = usePathname();

  const handleExit = () => {
    updateStore({ username: null, token: null });
    router.navigate("/");
  };

  return (
    <Context.Provider value={{ store, updateStore }}>
      <View style={styles.container}>
        {store.token && (
          <>
            <Text style={styles.welcomeTxt}>Bienvenido, {store.username}</Text>

            {pathname !== "/" && (
              <TouchableOpacity style={styles.logoutBtn} onPress={handleExit}>
                <FontAwesome6Icon name="door-open" style={styles.btnIcon} />
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
      <Slot />

      {pathname === "/lonchera" && (
        <View style={styles.botContainer}>
          <TouchableOpacity style={styles.btn} onPress={() => router.back()}>
            <FontAwesome5Icon name="arrow-left" style={styles.altBtnIcon} />
          </TouchableOpacity>
        </View>
      )}
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  botContainer: {
    height: 48,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 36,
  },
  container: {
    height: 48,
    width: "100%",
    marginTop: 72,
    paddingHorizontal: "5%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 16,
    marginBottom: 24,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: 72,
    height: "80%",
    borderColor: "#D1456C",
    borderWidth: 1,
  },
  altBtnIcon: {
    color: "#D1456C",
  },
  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: 72,
    height: "80%",
    backgroundColor: "#D1456C",
  },
  btnIcon: {
    color: "white",
  },
  welcomeTxt: {
    fontSize: 28,
  },
});
