import { useState } from "react";

export const useStore = () => {
  const [store, setStore] = useState({ username: null, token: null });

  const updateStore = (update) => setStore((prev) => ({ ...prev, ...update }));

  return { store, updateStore };
};
