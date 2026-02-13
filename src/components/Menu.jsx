import menuImage_1 from "../assets/images/menu1-min.jpg";

const coffeeDrink= [
  {name:"エスプレッソ",price:"530円"},
  {name:"エスプレッソダブル",price:"580円"},
  {name:"アメリカーノ",price:"620円",menuSub:"(ホット / アイス)"},
  {name:"マキアート",price:"650円"},
  {name:"カプチーノ",price:"690円"},
  {name:"カフェラテ",price:"640円"},
  {name:"アイスカフェラテ",price:"640円"},
  {name:"エスプレッソトニック",price:"640円"},
  {name:"エクストラショット",price:"プラス90円"},
]


const Menu = () =>{
const menuList = coffeeDrink.map((menu,index)=>{
  return <li key = {index} className = {`item-${index}`}>
    <span>{menu.name}</span>
    <span>{menu.price}</span>
    </li>
}
)
return (
  <>
  <section className="main-cont inner">
    <section className="menu-section menu-section1">
      <div className="menu-section-txt">
        <h2>Coffee Drink</h2>
        <ul className="menu">{menuList}</ul>
        <img className="menuImage" src={menuImage_1} alt="コーヒーを注いでいる画像" />
      </div>
    </section>
  </section>
  </>
);
}
export default  Menu;

