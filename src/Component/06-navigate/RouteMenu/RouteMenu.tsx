import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Mistake } from '../../04-mistake/Mistake';

import style from './NavigateMenu.module.css';

import { Login, Registration } from 'Component/02-auth';
import { Profile } from 'Component/03-profile/Profile';
import { NewPassword, RestorePassword } from 'Component/05-password';
import { PageCard } from 'Component/pageCard/PageCard/PageCard';

export const RouteMenu: React.FC = () => (
  <div className={style.routesContainer}>
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="restorePassword" element={<RestorePassword />} />
      <Route path="pageCard" element={<PageCard />} />
      <Route path="profile" element={<Profile />} />
      <Route path="newPassword/:token" element={<NewPassword />} />
      <Route path="authMe" element={<Login />} />
      <Route path="*" element={<Mistake />} />
    </Routes>
  </div>
);