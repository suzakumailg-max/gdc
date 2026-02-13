
import styles from "./Header.module.css";

import topImg from "../assets/images/logo-black.svg";

const menuList = [
  {name:'Top'},
  {name:'Coffee'},
  {name:'Barista'},
  {name:'Menu'},
  {name:'contact'}];

function Header() {
  const topText = menuList.map((menu)=>{
  return (
      <li   className={styles.list} key={menu.name}>
      <a href="#">{menu.name}</a></li>
  );
});
return(
      <nav>
      <div className={styles.module}>
      <ul className={styles.wrapper}>
        {topText}
      </ul>
      <img src =  {topImg} alt = "Good Day Cofeeのメッセージロゴ"/>
      </div>
      </nav>
      );
    };

export default Header;

