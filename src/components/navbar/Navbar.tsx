import { useState } from "react";
import navStyle from "./Navbar.module.css";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import SmallNavMenu from "../smallNavMenu/SmallNavMenu";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

type NavItems = {
  id: number;
  name: string;
  isActive: boolean;
}[];

const navItems: NavItems = [
  {
    id: 1,
    name: "LOANS",
    isActive: false,
  },
  {
    id: 2,
    name: "CREDIT CARD",
    isActive: false,
  },
  {
    id: 3,
    name: "INSURANCE",
    isActive: false,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navItemArray, setNavItemArray] = useState(navItems);

  const openDropDown = (id: number) => {
    const updatedNavItemsArray = navItems.map((item) => {
      if (item.id === id) {
        return { ...item, isActive: true };
      }
      return item;
    });

    setNavItemArray(updatedNavItemsArray);
  };
  const closeDropDown = (id: number) => {
    const updatedNavItemsArray = navItems.map((item) => {
      if (item.id === id) {
        return { ...item, isActive: false };
      }
      return item;
    });

    setNavItemArray(updatedNavItemsArray);
  };

  return (
    <nav>
      <ul className={navStyle.navItem_list}>
        {navItemArray.map((item) => {
          return (
            <li
              className={navStyle.nav_item}
              key={item.id}
              onMouseOver={() => openDropDown(item.id)}
              onMouseOut={() => closeDropDown(item.id)}
            >
              {item.name}{" "}
              {item.isActive ?  <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
            </li>
          );
        })}

        <li className={navStyle.nav_item}>
          <Link to="about">ABOUT US</Link>
        </li>
        <li className={navStyle.nav_item}>
          <Link to="login">LOGIN</Link>
        </li>
      </ul>
      <div className={navStyle.sm_menu}>
        {isOpen ? (
          <CgClose onClick={() => setIsOpen(false)} />
        ) : (
          <HiMenu onClick={() => setIsOpen(true)} />
        )}
      </div>
      {isOpen && <SmallNavMenu />}
    </nav>
  );
};

export default Navbar;
