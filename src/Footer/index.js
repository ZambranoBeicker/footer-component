import styles from "./styles.module.css";

export default function Footer() {
  return (
    <div className={styles.Wrapper}>
      <div>
        <h5 className={styles.title}>UNIVERSIDAD</h5>
        <ul className={styles.list}>
          <a className={styles.link} href="#">
            Ta ta ta
          </a>
          <a className={styles.link} href="#">
            Ta ta ta
          </a>
          <a className={styles.link} href="#">
            Ta ta ta
          </a>
          <a className={styles.link} href="#">
            Ta ta ta
          </a>
          <a className={styles.link} href="#">
            Ta ta ta
          </a>
          <a className={styles.link} href="#">
            Ta ta ta
          </a>
        </ul>
      </div>
      <div>
        <img
          className={styles.image}
          src="https://vrea.usm.cl/wp-content/uploads//2021/06/logo-acreditacion_blanco.svg"
        />
      </div>
    </div>
  );
}
