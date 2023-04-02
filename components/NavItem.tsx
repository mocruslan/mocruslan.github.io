import Link from "next/link";
import React from "react";
import styles from "../styles/NavItem.module.scss";

interface NavItemProps {
    label: string;
    href: string;
    active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({label, href, active}) => {
    return (
        <Link href={href} className={styles['nav-link']}>
            {label}
        </Link>
    );
};

export default NavItem;