import styles from "./MenuSection.module.css";
import { menuList } from "./menulist.js";

export default function MenuSection() {
  return (
    <section className={styles.section}>
      {menuList.map((item, index) => (
        <div key={index} className={styles.wrapper}>
          <div>
            <h2 className={styles.title}>{item.title}</h2>
            <div>
              <ul className={styles.listBox}>
                {item.menus.map((menu, i) => (
                <li key={i} className={styles.list}>
                  <span className={styles.name}>{menu.name}</span>
                  <span className={styles.price}>{menu.price}</span>
                </li>
              ))}
              </ul>
              </div>
            </div>
          <div className={styles.imgbox}>
            <img src={item.image} alt={item.alt} />
          </div>
        </div>
      ))}
    </section>
  );
}
