import React from 'react';

import { NavLink } from 'react-router-dom';

import style from './NavigateMenu.module.css';

export const NavigateMenu: React.FC = () => {
  const className = ({ isActive }: any): string | undefined =>
    isActive ? style.active : style.NotActive;

  return (
    <div className={style.navigateContainer}>
      <NavLink to="pageCard" className={className}>
        Packs List
      </NavLink>
      <NavLink to="profile" className={className}>
        Profile
      </NavLink>
    </div>
  );
};
