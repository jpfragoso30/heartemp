import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useLogin from "../hooks/useLogin";
import FontAwesome6Icon from "@expo/vector-icons/FontAwesome6";

export default function Inicio() {
  const {
    usuario,
    handleUsuarioChange,
    handleAcceder,
    isPwdVisible,
    togglePwdVisibility,
  } = useLogin();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo.png")} />
      <Text style={styles.label}>Usuario</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleUsuarioChange("nombre")}
        value={usuario.nombre}
      />
      <Text style={styles.label}>Contraseña</Text>
      <View style={styles.pwdContainer}>
        <TextInput
          style={styles.pwdInput}
          onChangeText={handleUsuarioChange("pwd")}
          value={usuario.pwd}
          secureTextEntry={!isPwdVisible}
        />
        <TouchableOpacity onPress={togglePwdVisibility}>
          {isPwdVisible ? (
            <FontAwesome6Icon name="eye-slash" style={styles.eyeIcon} />
          ) : (
            <FontAwesome6Icon name="eye" style={styles.eyeIcon} />
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleAcceder}>
        <Text style={styles.btnText}>ACCEDER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  eyeIcon: {
    fontSize: 24,
  },
  image: {
    width: "90%",
    height: 150,
    resizeMode: "stretch",
    marginBottom: 24,
  },
  label: {
    fontSize: 28,
  },
  pwdInput: {
    width: "90%",
    height: 60,
    fontSize: 28,
  },
  pwdContainer: {
    borderColor: "black",
    borderWidth: 1,
    width: "90%",
    height: 60,
    paddingHorizontal: 8,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "90%",
    height: 60,
    fontSize: 28,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "start",
    paddingTop: 24,
    paddingLeft: "10%",
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
