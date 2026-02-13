import styles from "./MenuSection.module.css";
import { coffeeDrink } from "./menulist.js";

export default function MenuSection() {
  return (
    <section className={styles.section}>
      {coffeeDrink.map((item, index) => (
        <div key={index} className={styles.inner}>
          <h2 className={styles.heading}>{item.title}</h2>

          <ul>
            {item.menus.map((menu, i) => (
              <li key={i} className={styles.list}>
                <span>{menu.name}</span>
                <span>{menu.price}</span>
              </li>
            ))}
          </ul>

          <div className={styles.imgbox}>
            <img src={item.image} alt={item.alt} />
          </div>
        </div>
      ))}
    </section>
  );
}
