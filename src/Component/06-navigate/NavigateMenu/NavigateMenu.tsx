import React from 'react';

import { NavLink } from 'react-router-dom';

import style from './NavigateMenu.module.css';

export const NavigateMenu: React.FC = () => {
  const className = ({ isActive }: any): string | undefined =>
    isActive ? style.active : style.NotActive;

  return (
    <div className={style.navigateContainer}>
      {/* <NavLink to="login" className={className}> */}
      {/* Login */}
      {/* </NavLink> */}
      {/* <NavLink to="registration" className={className}> */}
      {/*  Registration */}
      {/* </NavLink> */}
      {/* <NavLink to="restorePassword" className={className}> */}
      {/*  сменить пароль */}
      {/* </NavLink> */}
      <NavLink to="pageCard" className={className}>
        Packs List
      </NavLink>
      <NavLink to="profile" className={className}>
        Profile
      </NavLink>
      {/* <NavLink to="newPassword" className={className}> */}
      {/*  NewPassword */}
      {/* </NavLink> */}
      {/* <NavLink to="authMe" className={className}> */}
      {/*  AuthMe */}
      {/* </NavLink> */}
    </div>
  );
};
