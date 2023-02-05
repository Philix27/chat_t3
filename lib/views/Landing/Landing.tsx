import styles from "./Landing.module.scss";

export const HomeLanding = () => {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.sectionTitle}>Situation Room</h1>

        <p className={styles.smallText}>
          For PPC members and all stake holders.
        </p>

        <a href="/login">
          <div className="btn">Login</div>
        </a>
      </div>
    </div>
  );
};
