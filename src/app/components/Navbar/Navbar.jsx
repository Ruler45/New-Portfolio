"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const navlinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}></div>
      <div className={styles.navlinks}>
        {navlinks.map((link) => {
          return (
            <Link
              key={link.path}
              href={link.path}
              className={`${styles.navlink} ${usePathname() === link.path ? styles.active : ""}`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
