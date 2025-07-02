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
    formErrors,
    usuario,
    handleUsuarioChange,
    handleAcceder,
    isPwdVisible,
    togglePwdVisibility,
    disableAcceder,
  } = useLogin();

  const errors = formErrors?.length;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo.png")} />
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input(errors)}
          onChangeText={handleUsuarioChange("email")}
          value={usuario.email}
          autoCapitalize="none"
        />
        <Text style={styles.label}>Contraseña</Text>
        <View style={styles.pwdContainer(errors)}>
          <TextInput
            style={styles.pwdInput}
            onChangeText={handleUsuarioChange("password")}
            value={usuario.password}
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
        <Text style={styles.errorText}>{formErrors}</Text>
        <TouchableOpacity
          style={styles.btn(disableAcceder)}
          onPress={handleAcceder}
          disabled={disableAcceder}
        >
          <Text style={styles.btnText}>ACCEDER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: "#D1456C",
  },
  eyeIcon: {
    fontSize: 24,
  },
  image: {
    width: "40%",
    height: 200,
    resizeMode: "stretch",
    alignSelf: "center",
  },
  label: {
    fontSize: 28,
  },
  pwdInput: {
    width: "90%",
    height: 60,
    fontSize: 28,
  },
  pwdContainer: (errors) => ({
    borderColor: errors ? "#D1456C" : "black",
    borderWidth: 1,
    width: "100%",
    height: 60,
    paddingHorizontal: 8,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
  }),
  input: (errors) => ({
    borderColor: errors ? "#D1456C" : "black",
    borderWidth: 1,
    width: "100%",
    height: 60,
    fontSize: 28,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 16,
  }),
  formContainer: {
    width: "90%",
    alignSelf: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "start",
    paddingTop: 24,
    gap: 16,
  },
  btn: (disableAcceder) => ({
    marginTop: 12,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: "100%",
    height: 60,
    backgroundColor: disableAcceder ? "#DDD" : "#D1456C",
  }),
  btnText: {
    color: "white",
    fontSize: 28,
    fontWeight: 600,
  },
});
