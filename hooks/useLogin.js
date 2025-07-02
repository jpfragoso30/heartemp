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
        "http://127.0.0.1:4000/api/auth/login",
        usuario
      );

      updateStore(data);
      router.navigate("/listaLoncheras");
    } catch (e) {
      console.error("LOGIN API", e);
      console.error(e.response.data.errors);
      console.error(error.message);
      console.error(error.response.message);
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
