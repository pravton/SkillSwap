// src/components/Header/Header.tsx
import React from 'react';
import styles from './Header.module.css';

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <a href={href} className={styles.headerNavLink}>
      {label}
    </a>
  );
};

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.headerLogo}>
        SkillSwap
      </a>
      <nav className={styles.headerNav}>
        <NavLink href="/login" label="Login" />
        <NavLink href="/register" label="Register" />
      </nav>
    </header>
  );
};

export default Header;
