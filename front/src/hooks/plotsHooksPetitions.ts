import { useEffect, useState } from "react";
import { IPlotsType } from "@/interfaces/interfaces";
import { fetchPlots } from "@/lib/server/petitionPlots";
import { useDispatch } from "react-redux";
import { savePlot } from "@/redux/reducer";

const useFetchPlots = (userId: string, token: string) => {
  const [plots, setPlots] = useState<IPlotsType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPlots = async () => {
      if (userId && token) {
        try {
          const fetchedPlots = await fetchPlots(userId, token, (plots) => {
            dispatch(savePlot(plots));
          });
          setPlots(fetchedPlots);
        } catch (error) {
          console.error("Error fetching plots:", error);
          setError("Failed to fetch plots.");
        }
      }
    };

    getPlots();
  }, [userId, token, dispatch]);

  return { plots, error };
};

export default useFetchPlots;
