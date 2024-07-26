"use client";
import React, { useState, useContext } from "react";
import { IPlotsType, PlotPanelProps } from "@/interfaces/interfaces";
import PlotDetailCard from "./PlotDetailCard/PlotDetailCard";
import LandingButton from "../LandingButton/LandingButton";
import axios from "axios";

const PlotPanel: React.FC<PlotPanelProps> = ({ plots: initialPlots }) => {
  // const [plots, setPlots] = useState<IPlotsType[]>(initialPlots);
  const [cereal, setCereal] = useState("");
  const [surface, setSurface] = useState("");
  // const [newPlots, setNewPlots] = useState<IPlotsType[]>([]);

  // const handleCerealChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setCereal(event.target.value);
  // };

  // const handleSurfaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSurface(event.target.value);
  // };

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   const newPlot = { cereal, surface, user };
  //   try {
  //     const response = await axios.post(`${API_URL}/plots/create`, newPlot, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (response.data) {
  //       const createdPlot = response.data;
  //       console.log("Plot creado:", createdPlot);
  //       setNewPlots([...newPlots, createdPlot]);
  //       setPlots([...plots, createdPlot]);
  //     }
  //   } catch (error) {
  //     console.error("Error al crear el plot:", error);
  //   }
  // };

  return (
    <div className="w-full max-w-screen-lg min-h-screen mx-auto p-4 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-start uppercase">
          All of your plots <span className="poppins-thin"> in one place.</span>
        </h1>
        <h2 className="text-lg poppins-regular mt-10">Add a new plot</h2>
        <form
          className="flex flex-col md:flex-row gap-4 mt-4"
          //onSubmit={handleSubmit}
        >
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <input
              type="text"
              className="py-2 px-4 border border-gray-300 rounded-sm shadow-sm"
              placeholder="Write Cereal"
              value={cereal}
              //onChange={handleCerealChange}
            />
            <input
              type="text"
              className="py-2 px-4 border border-gray-300 rounded-sm shadow-sm mt-2 sm:mt-0"
              placeholder="Write Surface"
              value={surface}
              //onChange={handleSurfaceChange}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Create Plot
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        {initialPlots.map((plot: IPlotsType) => (
          <PlotDetailCard
            key={plot.id}
            id={plot.id}
            surface={plot.surface}
            cereal={plot.cereal}
            labors={plot.labors}
            supplies={plot.supplies}
          />
        ))}
      </div>
    </div>
  );
};

export default PlotPanel;
