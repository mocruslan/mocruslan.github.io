import React, {useState} from 'react';
import NavItem from "./NavItem";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

interface NavItem {
    href: string;
    label: string;
}

const navItems: NavItem[] = [
    {href: '#landing-page', label: 'Home'},
    {href: '#about-page', label: 'About'},
    {href: '#projects-page', label: 'Projects'},
    {href: '#contact-page', label: 'Contact'},
];

const Navbar: React.FC = () => {
    const [navActive, setNavActive] = useState<boolean>(false);
    const [activeIdx, setActiveIdx] = useState<number>(-1);

    return (
        <nav className={styles['nav-menu']}>

            {/*<div>*/}
            {/*    <Link href={"/"}>*/}
            {/*        <h1 className={styles['nav-logo']}>LOGO</h1>*/}
            {/*    </Link>*/}
            {/*</div>*/}
            <div className={styles['nav-list']}>
                {navItems.map((menu, idx) => (
                    <div className={styles['nav-index']}
                         onClick={() => {
                             setActiveIdx(idx);
                             setNavActive(true);
                         }}
                         key={menu.label}
                    >
                        <NavItem active={activeIdx === idx} {...menu} />
                    </div>
                ))}
                <div className={styles['dot']}></div>
            </div>
        </nav>
    );
};

export default Navbar;