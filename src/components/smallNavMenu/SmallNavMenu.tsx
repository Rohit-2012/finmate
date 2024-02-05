import smNavStyle from './SmallNavMenu.module.css'
import { Link } from 'react-router-dom';

type NavItems = {
    id: number
    name: string;
  }[];

const SmallNavMenu = () => {

    const navItems: NavItems = [
        {
          id: 1,
          name: 'LOANS'
        },
        {
          id: 2,
          name: 'CREDIT CARD'
        },
        {
          id: 3,
          name: 'INSURANCE'
        }
      ];
  return (
    <div className={smNavStyle.menu_container}>
          <ul>
              {navItems.map(item => {
                   return <li className={smNavStyle.nav_item} key={item.id}>{item.name}</li>;
              })}
        <li className={smNavStyle.nav_item}><Link to='about'>ABOUT US</Link></li>
        <li className={smNavStyle.nav_item}><Link to='login'>LOGIN</Link></li>
      </ul>
    </div>
  )
}

export default SmallNavMenu
