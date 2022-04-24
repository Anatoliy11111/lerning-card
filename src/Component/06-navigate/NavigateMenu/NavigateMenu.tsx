import React from 'react';

import { NavLink } from 'react-router-dom';

import style from './NavigateMenu.module.css';

import { RouteLink } from 'enum/enum';

export const NavigateMenu: React.FC = () => {
  const className = ({ isActive }: any): string | undefined =>
    isActive ? style.active : style.notActive;

  return (
    <header>
      <nav className={style.navigateContainer}>
        <NavLink to={RouteLink.pageCard} className={className}>
          Packs List
        </NavLink>
        <NavLink to={RouteLink.profile} className={className}>
          Profile
        </NavLink>
      </nav>
    </header>
  );
};
