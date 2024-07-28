import React from "react";
import { useDispatch } from "react-redux";
import { savePlot } from "@/redux/reducer";
import { IPlotsType, Labors } from "@/interfaces/interfaces";

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

  const addPlotsStorage = (plot: IPlotsType) => {
    const plotsStorage = localStorage.getItem("plots");
    if (plotsStorage) {
      const parsedPlotsStorage = JSON.parse(plotsStorage);
      parsedPlotsStorage.push(plot);
      localStorage.setItem("plots", JSON.stringify(parsedPlotsStorage));
    }
  };

  const updatePlotsStorage = (plotId: string, labors: Labors[]) => {
    const plotsStorage = localStorage.getItem("plots");
    if (plotsStorage) {
      const parsedPlotsStorage = JSON.parse(plotsStorage);
      const plot = parsedPlotsStorage.find(
        (plot: IPlotsType) => plot.id === plotId
      );
      if (plot) {
        plot.labors = labors;
        localStorage.setItem("plots", JSON.stringify(parsedPlotsStorage));
      }
    }
  };

  const clearPlotsStorage = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("plots");
    }
  };

  return {
    savePlotsStorage,
    addPlotsStorage,
    updatePlotsStorage,
    clearPlotsStorage,
  };
};

export default useDataPlot;
