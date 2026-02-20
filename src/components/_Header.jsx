
import styles from "./Header.module.css";

import topImg from "../assets/images/logo-black.svg";

const menuList = [
  {name:'Top'},
  {name:'Coffee'},
  {name:'Barista'},
  {name:'Menu'},
  {name:'contact'}];

function Header() {
  const topText = menuList.map((menu,index)=>{
  return (
      <li  key={index} className={styles.list} >
      <a href="#">{menu.name}</a></li>
  );
});
return(
      <nav>
      <div className={styles.module}>
      <img src =  {topImg} alt = "Good Day Coffeeのメッセージロゴ" className={styles.topImg} />
      <ul className={styles.wrapper}>
        {topText}
      </ul>
      </div>
      </nav>
      );
    };

export default Header;

