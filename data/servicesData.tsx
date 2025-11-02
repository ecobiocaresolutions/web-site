// src/data/servicesData.ts
import { ReactNode } from "react";
import {
  GiWaterDrop,
  GiChemicalDrop,
  GiMicroscope,
  GiWindSlap,
  GiSpade,
  GiDrippingTube,
  GiHouse,
  GiCoalWagon,
  GiAtom,
} from "react-icons/gi";

export type ServiceEntry = {
  id: string;
  title: string;
  icon: ReactNode;
  description: string;
};

export const servicesData: ServiceEntry[] = [
  {
    id: "water-testing",
    title: "Water Testing",
    icon: <GiWaterDrop />,
    description:
      `We provide comprehensive water testing services for drinking, industrial, and groundwater sources. Our NABL-accredited lab conducts a full range of physical, chemical, and biological analyses including pH, hardness, turbidity, dissolved oxygen, total dissolved solids, and microbial contamination. These tests ensure compliance with BIS 10500:2012 and WHO standards, guaranteeing your water is safe and fit for its intended use. We also offer customized testing packages for residential, industrial, and environmental monitoring projects.`,
  },
  {
    id: "waste-water-testing",
    title: "Waste Water Testing",
    icon: <GiChemicalDrop />,
    description:
      `Our wastewater testing services analyze effluents from industrial, municipal and domestic sources for BOD, COD, TSS, oil & grease, ammonia, heavy metals and other toxic substances in accordance with CPCB/SPCB norms. We support ETP/STP performance audits, compliance reporting and process optimisation.`,
  },
  {
    id: "microbiological-testing",
    title: "Microbiological Testing",
    icon: <GiMicroscope />,
    description:
      `Specialized microbiological analyses for water, food, surfaces and air — total coliforms, E. coli, pathogens, yeast & mould. We use validated membrane filtration and culture methods and provide actionable QA/QC reports for food, pharma and environmental clients.`,
  },
  {
    id: "atmospheric-pollution-monitoring",
    title: "Atmospheric Pollution Monitoring",
    icon: <GiWindSlap />,
    description:
      `Ambient and stack monitoring to measure PM10, PM2.5, SO2, NOx, CO and VOCs using high-precision analyzers. We provide time-series data, compliance reports and mitigation recommendations to meet air quality regulations.`,
  },
  {
    id: "soil-sediment-testing",
    title: "Soil & Sediment Testing",
    icon: <GiSpade />,
    description:
      `Soil and sediment testing for fertility, contamination and heavy metal screening. Analyses include N-P-K, organic carbon, CEC, and trace metals to guide land use, remediation and agricultural decisions.`,
  },
  {
    id: "sludge-testing",
    title: "Sludge Testing",
    icon: <GiDrippingTube />,
    description:
      `Sludge characterisation (moisture, volatile solids, nutrients, heavy metals, pathogens) for safe disposal, reuse or composting. We provide laboratory-backed recommendations and compliance documentation.`,
  },
  {
    id: "indoor-air-quality-testing",
    title: "Indoor Air Quality Testing",
    icon: <GiHouse />,
    description:
      `Indoor air quality audits measuring CO2, CO, formaldehyde, VOCs, particulate matter and microbial contaminants. Reports include mitigation steps to improve ventilation and occupant health.`,
  },
  {
    id: "coal-coke-testing",
    title: "Coal & Coke Testing",
    icon: <GiCoalWagon />,
    description:
      `Proximate/ultimate analyses, calorific value, moisture, ash and sulfur testing for coal and coke. Useful for power plants, steel mills and fuel traders to assess combustion performance and compliance.`,
  },
  {
    id: "heavy-metal-testing",
    title: "Heavy Metal Testing",
    icon: <GiAtom />,
    description:
      `Trace & heavy metal quantification (Pb, Hg, As, Cd, Cr, Ni) using AAS/ICP-OES in water, soil, sludge and food. Accurate detection to support safety and regulatory compliance.`,
  },
];

export const findServiceById = (id: string) =>
  servicesData.find((s) => s.id === id);
