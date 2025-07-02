import axios from "axios";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { Context } from "../app/_layout";

export default useLogin = () => {
  const { updateStore } = useContext(Context);
  const router = useRouter();
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [formErrors, setFormErrors] = useState("");
  const disableAcceder =
    usuario.email.length === 0 ||
    usuario.password.length < 8 ||
    !/^\S+@\S+\.\S+$/.test(usuario.email);

  const handleUsuarioChange = (field) => (value) => {
    setFormErrors("");
    if (field === "password" && value.length > 8) return;
    if (field === "email" && value.length > 18) return;
    setUsuario((prev) => ({ ...prev, [field]: value }));
  };

  const handleAcceder = async () => {
    if (disableAcceder) return;
    try {
      const { data } = await axios.post(
        `http://${process.env.EXPO_PUBLIC_API_PATH}/api/auth/login`,
        usuario
      );

      updateStore(data);
      router.navigate("/listaLoncheras");
    } catch (e) {
      console.error("LOGIN API", e);
      if (!e?.response)
        setFormErrors("No se encontró el correo o la contraseña es incorrecta");
      setFormErrors(e.response.data.errors[0].msg);
    }
  };

  const togglePwdVisibility = () => setIsPwdVisible((prev) => !prev);

  return {
    usuario,
    handleUsuarioChange,
    handleAcceder,
    isPwdVisible,
    togglePwdVisibility,
    disableAcceder,
    formErrors,
  };
};
