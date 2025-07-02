import { useRouter } from "expo-router";
import { useState } from "react";

export default useLogin = () => {
  const router = useRouter();
  const [usuario, setUsuario] = useState({
    nombre: "",
    pwd: "",
  });
  const [isPwdVisible, setIsPwdVisible] = useState(false);

  const handleUsuarioChange = (field) => (value) => {
    if (field === "pwd" && value.length > 8) return;
    setUsuario((prev) => ({ ...prev, [field]: value }));
  };

  const handleAcceder = () => {
    fetch("https://127.0.0.1:4000/api/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        router.navigate("/listaLoncheras");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const togglePwdVisibility = () => setIsPwdVisible((prev) => !prev);

  return {
    usuario,
    handleUsuarioChange,
    handleAcceder,
    isPwdVisible,
    togglePwdVisibility,
  };
};
