import Link from "next/link";
import React from "react";
import styles from "./allstates.module.scss";
import { api } from "../../utils/api";

export default function AllStates() {
  const { data, isLoading, error } = api.state.getAll.useQuery();
  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h3>Error...</h3>
      </div>
    );
  }
  if (data) {
    return (
      <div className={styles.container}>
        <div>
          <h3>All States Group</h3>
        </div>
        <div className={styles.cards}>
          {data.map((state, index) => (
            <Link href="/">
              <div>
                <h3>{state.name}</h3>
                <p>{state.code}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
