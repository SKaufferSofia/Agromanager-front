import React from "react";
import { useDispatch } from "react-redux";
import { addPlot, savePlot } from "@/redux/reducer";
import { IPlotsType } from "@/interfaces/interfaces";

const useDataPlot = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const plots = localStorage.getItem("plots");
      if (plots) {
        dispatch(savePlot(JSON.parse(plots)));
      }
    }
  }, [dispatch]);

  const savePlotsStorage = (plots: IPlotsType[]) => {
    localStorage.setItem("plots", JSON.stringify(plots));
  };

  const addPlotsStorage = (plots: IPlotsType) => {
    const plotsStorage = localStorage.getItem("plots");
    if (plotsStorage) {
      const parsedPlotsStorage = JSON.parse(plotsStorage);
      parsedPlotsStorage.push(plots);
      localStorage.setItem("plots", JSON.stringify(parsedPlotsStorage));
    }
  };

  const clearPlotsStorage = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("plots");
    }
  };

  return { savePlotsStorage, addPlotsStorage, clearPlotsStorage };
};

export default useDataPlot;
