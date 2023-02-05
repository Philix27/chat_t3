import React from "react";
import dummyData from "./data";
import styles from "./analytics.module.scss";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import AnalyticsDataType from "./analytics.type";
import { useRouter } from "next/router";

interface Props {
  data: AnalyticsDataType[];
}

export const ChartComp: React.FC<Props> = (props) => {
  const router = useRouter();
  const { data } = props;

  console.log("insidechart", data);
  // const listPartyVotes = [...data.partyVotes];

  return (
    <div className={styles.rechart}>
      {data.map((stateInfo, index) => (
        <ResponsiveContainer width="100%" aspect={3} key={index}>
          <BarChart
            width={500}
            height={300}
            data={[stateInfo]}
            margin={{
              top: 5,
              right: 20,
              left: 20,
              bottom: 5,
            }}
            onClick={() => {
              router.push("states/1/");
            }}
          >
            <CartesianGrid strokeDasharray="1 1" fill="#fff" />
            <XAxis dataKey="state" />
            <Tooltip />
            <Legend />
            {/* <YAxis /> */}
            <Bar dataKey="A" fill="#70F8BF" barSize={60} />
            <Bar dataKey="AA" fill="#FF8901" barSize={60} />
            <Bar dataKey="AAC" fill="#00850B" barSize={60} />
            <Bar dataKey="APC" fill="#FF1C1C" barSize={60} />
            <Bar dataKey="APP" fill="#1C99FF" barSize={60} />
            <Bar dataKey="ADC" fill="#9DA800" barSize={60} />
            <Bar dataKey="ADP" fill="#6B1DE9" barSize={60} />
            <Bar dataKey="APGA" fill="#1CFF7B" barSize={60} />
            <Bar dataKey="APM" fill="#0011FF" barSize={60} />
            <Bar dataKey="BP" fill="#FF1CE1" barSize={60} />
            <Bar dataKey="LP" fill="#1CCAFF" barSize={60} />
            <Bar dataKey="NNPP" fill="#7DDAE0" barSize={60} />
            <Bar dataKey="NRM" fill="#DA00CF" barSize={60} />
            <Bar dataKey="PDP" fill="#00B9DA" barSize={60} />
            <Bar dataKey="PRP" fill="#1C99FF" barSize={60} />
            <Bar dataKey="SDP" fill="#96455A" barSize={60} />
            <Bar dataKey="YPP" fill="#F06000" barSize={60} />
            <Bar dataKey="ZLP" fill="#1C99FF" barSize={60} />
          </BarChart>
        </ResponsiveContainer>
      ))}
    </div>
  );
};

export default ChartComp;
