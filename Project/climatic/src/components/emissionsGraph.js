import React from "react";
import { Line } from "react-chartjs-2";
import TotalEmissionData from "../assets/cs196-15-climate-vis-default-rtdb-export.json";
import AgriculturalEmissionData from "../assets/ghg_emissions_usa_agriculture.json";
import EnergyEmissionData from "../assets/ghg_emissions_usa_energy.json";
import BunkerEmissionData from "../assets/ghg_emissions_usa_bunker_fuels.json";
import LandForestEmissionData from "../assets/ghg_emissions_usa_land_forestry.json";
import WasteEmissionData from "../assets/ghg_emissions_usa_waste.json";

export default function EmissionsGraph() {
  let years = [];
  let totalData = [];
  let agriculturalData = [];
  let energyData = [];
  let bunkerData = [];
  let landForestData = [];
  let wasteData = [];
  for (let key in TotalEmissionData.ghg_emissions_usa) {
    years.push(key);
    totalData.push(TotalEmissionData.ghg_emissions_usa[key]);
  }
  for (let key in AgriculturalEmissionData.ghg_emissions_usa_agriculture) {
    agriculturalData.push(
      AgriculturalEmissionData.ghg_emissions_usa_agriculture[key]
    );
  }
  for (let key in EnergyEmissionData.ghg_emissions_usa_energy) {
    energyData.push(EnergyEmissionData.ghg_emissions_usa_energy[key]);
  }
  for (let key in BunkerEmissionData.ghg_emissions_usa_bunker_fuels) {
    bunkerData.push(BunkerEmissionData.ghg_emissions_usa_bunker_fuels[key]);
  }
  for (let key in LandForestEmissionData.ghg_emissions_usa_land_forestry) {
    landForestData.push(
      LandForestEmissionData.ghg_emissions_usa_land_forestry[key]
    );
  }
  for (let key in WasteEmissionData.ghg_emissions_usa_waste) {
    wasteData.push(WasteEmissionData.ghg_emissions_usa_waste[key]);
  }
  console.log(years);
  console.log(totalData);
  console.log(agriculturalData);
  console.log(bunkerData);
  const state = {
    labels: years,
    datasets: [
      {
        label: "GHG Emissions Total USA",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(160,100,70,1)",
        borderColor: "rgba(160,100,70,1)",
        borderWidth: 2,
        data: totalData,
      },
      {
        label: "GHG Emissions - Agriculture",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(100,170,230,1)",
        borderColor: "rgba(100,170,230,1)",
        borderWidth: 2,
        data: agriculturalData,
      },
      {
        label: "GHG Emissions - Energy",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(240,215,10,1)",
        borderColor: "rgba(240,215,10,1)",
        borderWidth: 2,
        data: energyData,
      },
      {
        label: "GHG Emissions Bunker Fuels",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(200,20,20,1)",
        borderColor: "rgba(200,20,20,1)",
        borderWidth: 2,
        data: bunkerData,
      },
      {
        label: "GHG Emissions - Land Use and Forestry",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(70,180,10,1)",
        borderColor: "rgba(70,180,10,1)",
        borderWidth: 2,
        data: landForestData,
      },
      {
        label: "GHG Emissions - Waste",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(255,140,10,1)",
        borderColor: "rgba(255,140,10,1)",
        borderWidth: 2,
        data: wasteData,
      },
    ],
  };
  return (
    <div className="Box">
      <div className="Graph-Container">
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: "GHG Emissions in US",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
      <div className="Paragraph">
        <p>
          Greenhouse gasses contribute to global warming by trapping heat in the
          ozone layer. Over the past few decades, we’ve learned that
          anthropogenic climate change poses an imminent threat to humanity.
          However, it’s difficult for most people to grasp just how much climate
          change is transforming the world.
        </p>
        <p>
          Hover over each data point to see what the greenhouse gas emissions
          are in each sector of US industries over the past three decades.
        </p>
        <a href="mailto:representative@illinois.gov">
          <div className="Link">
            Contact your local representative about holding industries
            accountable for climate change!
          </div>
        </a>
      </div>
    </div>
  );
}
