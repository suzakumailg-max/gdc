import styles from "./MenuSection.module.css";
import { menuList } from "./Menulist.js";

export default function MenuSection() {
  return (
    <section className={styles.section}>
      {menuList.map((item, index) => (
        <div key={index} className={styles.wrapper} style={{ flexDirection: item.direction }}>
          <div>
            <h2 className={styles.title}>{item.title}</h2>
              <ul className={styles.listBox}>
                {item.menus.map((menu, i) => (
                <div  key={i} style={{ flexDirection: menu.direction }}>
                <li className={styles.list} >
                  <span className={styles.name}>{menu.name}</span>
                  <span className={styles.price}>{menu.price}</span>
                </li>
                </div>
              ))}
            </ul>
          </div>
        <div className={styles.imgbox}>
      <img src={item.image} alt={item.alt} />
    </div>
  </div>
))}
</section>
);
}
