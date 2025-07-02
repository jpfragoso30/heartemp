import axios from "axios";
import { useEffect, useState } from "react";

export const useMonitor = () => {
  const [latestData, setLatestData] = useState({
    general: "-",
    envase: "-",
    location: "-",
    duration: "3h 0m 0s",
    bateria: "100%",
    alert: "-",
    LT: null,
    LN: null,
  });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const KEY = process.env.EXPO_PUBLIC_LOC_API_KEY;

  const fetchLatest = async () => {
    try {
      setIsRefreshing(true);
      const { data } = await axios.get(
        `http://${process.env.EXPO_PUBLIC_API_PATH}/api/heart/measures/last-one`
      );

      setLatestData((prev) => ({
        ...prev,
        general: data?.general || "-",
        envase: data?.envase || "-",
        LT: data?.latitud,
        LN: data?.longitud,
      }));
    } catch (e) {
      console.error("LATEST API", e);
    }

    setIsRefreshing(false);
  };

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const { data } = await axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=${latestData?.LT}+${latestData?.LN}&key=${KEY}`
        );

        setLatestData((prev) => ({
          ...prev,
          location: data?.results[0]?.formatted || "-",
        }));
      } catch (e) {
        console.error("LOC API", e);
      }
    };

    if (latestData?.LT && latestData?.LN) {
      fetchLocation();
    }
  }, [latestData?.LT, latestData?.LN]);

  useEffect(() => {
    fetchLatest();
  }, []);

  return { latestData, fetchLatest, isRefreshing };
};
