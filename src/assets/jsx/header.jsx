
const menuList = [
  {name:'Top'},
  {name:'Cofee'},
  {name:'Barista'},
  {name:'Menu'},
  {name:'contact'}];

function Header() {
  const topText = menuList.map((menu)=>{
  return (
      <li key={menu.name}>
      <a href="#">{menu.name}</a>
      </li>
  );
});
return(
      <nav>
        {topText}
      </nav>
      );
    };

export default Header;

