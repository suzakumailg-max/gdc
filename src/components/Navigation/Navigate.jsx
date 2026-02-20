import styles from "./Navigate.module.css";
import { Link } from "react-router-dom";

export default function Navigate() {
    return (
        <>
          <div className={styles.inner}>
            <nav>
              <ul className={styles.navList}>
                <li>
                  <Link to="/" className={styles.link}>
                  Top
                  </Link>
                </li>
                  <li>
                    <Link to="/coffee" className={styles.link}>
                    Coffee
                    </Link>
                  </li>
                    <li>
                      <Link to="/barista" className={styles.link}>
                      Barista
                      </Link>
                    </li>
                      <li>
                        <Link to="/menu" className={styles.link}>
                        Menu
                        </Link>
                    </li>
                      <li>
                        <Link to="/contact" className={styles.link}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
                </div>
            </>
          );
          }
