"use client"

import Link from 'next/link'
import classes from "./nav-link.module.css"
import { usePathname } from 'next/navigation';

const NavLink = () => {
    const path = usePathname();
  return (
    <>
    <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals" className={path.startsWith("/meals") ? classes.active : undefined}>Browse Meals</Link>
            </li>
            <li>
              <Link href="/community" className={path==="/community" ? classes.active : undefined}>Foodie community</Link>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default NavLink