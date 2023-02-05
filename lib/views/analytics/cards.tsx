import Link from "next/link";
import React from "react";
import AnalyticsDataType from "./analytics.type";
import styles from "./cards.module.scss";
import dummyData from "./data";

interface Props {
  data: AnalyticsDataType[];
}

export const CardsComp: React.FC<Props> = (props) => {
  const { data } = props;

  return (
    <div className={styles.contents}>
      {/* // TODO: USE IMAGE ICON */}
      {data.map((d, index) => (
        <Link href={`states/${d.state}`} key={index}>
          <div className={styles.card}>
            <h4>{d.state}</h4>
            <p>A: {d.A}</p>
            <p>APC: {d.APC}</p>
            <p>PDP: {d.PDP}</p>
            <p>NNPP: {d.NNPP}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardsComp;

// export default function CardsComp(props: AnalyticsDataType[]) {
//   return (
//     <div className={styles.contents}>
//       {/* // TODO: USE IMAGE ICON */}
//       {props.map((d, index) => (
//         <Link href={`states/${d.state}`} key={index}>
//           <div className={styles.card}>
//             <h4>{d.state}</h4>
//             <p>APC: {d.apc}</p>
//             <p>PDP: {d.pdp}</p>
//             <p>NNPP: {d.lp}</p>
//             <p>others - 600</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// }
