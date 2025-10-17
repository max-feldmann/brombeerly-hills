'use client'

import React from "react";
import { XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, Legend } from "recharts";
import { cormorantGaramond } from "../../../../public/styles/fonts";

const data = [
  { name: "1952", value: 400000 },
  { name: "1964", value: 300000 },
  { name: "1991", value: 90000 },
  { name: "2000", value: 45000 },
  { name: "2025", value: 37000 },
];

const getInfoLabel = (label: string | undefined) => {
  if (label === "1952") {
    return "Hier war'n mer ma";
  } else if (label === "1964") {
    return "Hier ist dann was passiert"
  } else if (label === "1991") {
    return "Auch hier gab es Ereignisse"
  } else if (label = "2000") {
    return "Hier war dann schon fast alles weg"
  } else if (label = "2025") {
    return "Da haben wir den Salat dann"
  }
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}


const CustomTooltip = ({ payload, label } : CustomTooltipProps) => {
  console.log(payload)
  if (payload && payload.length) {
    return (
      <div className="bg-white/10 rounded-md shadow-xl backdrop-blur-md p-5">
        <p className={` ${cormorantGaramond.className} mb-3`}>Baumbestand: {payload[0].value}</p>
        <p className="desc">{getInfoLabel(label)}</p>
      </div>
    );
  }

  return null;
};

const TreeCountStatistic = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#613641" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#613641" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <YAxis hide />
        <XAxis  dataKey="name" />
        <Tooltip content={<CustomTooltip />} />
        <Area type="monotone" className={`${cormorantGaramond.className}`} dataKey="value" name="Streuobst Bäume in Deutschland" stroke="#613641" strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" />
        <Legend align="left" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default TreeCountStatistic;
