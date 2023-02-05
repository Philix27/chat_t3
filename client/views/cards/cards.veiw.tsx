import Link from "next/link";
import React from "react";
import styles from "./cards.module.scss";

interface Props {
  sectionTitle: string;
  objs: {
    href: string;
    title: string;
    subtitle: string;
  }[];
}
export default function CardsSection(props: Props) {
  return (
    <div className={styles.container}>
      <div>
        <h3>{props.sectionTitle}</h3>
      </div>

      <div className={styles.cards}>
        {props.objs.map((obj, index) => (
          <Link href={obj.href}>
            <div>
              <h3>{obj.title}</h3>
              <p>{obj.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
