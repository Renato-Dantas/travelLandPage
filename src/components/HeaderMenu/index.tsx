import menuData from "./menuData.json";

interface MenuItem {
  text: string;
  href: string;
}

interface Submenu {
  [key: string]: MenuItem;
}

const handleHover = () => {
  console.log(">>>");
};

const MenuHeader = () => {
  //   const renderSubmenu = (submenu: Submenu) => (
  //     <ul>
  //       {Object.entries(submenu).map(([key, value]) => (
  //         <li key={key}>
  //           <a href={value.href}>{value.text}</a>
  //         </li>
  //       ))}
  //     </ul>
  //   );

  return (
    <nav className="header-nav">
      <ul className="header-nav-menu">
        {Object.entries(menuData.menus).map(([key, value]) => (
          <li
            key={key}
            className="header-nav-menu--link"
            onMouseEnter={() => handleHover}
          >
            <a href="#">{value.text}</a>
            {/* <div className="only-on-hover">
              {value.submenus && renderSubmenu(value.submenus)}
            </div> */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuHeader;
