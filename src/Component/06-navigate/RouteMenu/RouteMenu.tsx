import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Mistake } from '../../04-mistake/Mistake';

import style from './NavigateMenu.module.css';

import { Login, Registration } from 'Component/02-auth';
import { Profile } from 'Component/03-profile/Profile';
import { NewPassword, RestorePassword } from 'Component/05-password';
import { CardsList } from 'Component/pageCard/PageCard/cardsList/CardsList';
import { PageCard } from 'Component/pageCard/PageCard/PageCard';
import { RouteLink } from 'enum/enum';

export const RouteMenu: React.FC = () => (
  <div className={style.routesContainer}>
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path={RouteLink.login} element={<Login />} />
      <Route path={RouteLink.registration} element={<Registration />} />
      <Route path={RouteLink.restorePassword} element={<RestorePassword />} />
      <Route path={RouteLink.pageCard} element={<PageCard />} />
      <Route path={RouteLink.card} element={<CardsList />} />
      <Route path={RouteLink.profile} element={<Profile />} />
      <Route path={RouteLink.newPassword} element={<NewPassword />} />
      <Route path={RouteLink.login} element={<Login />} />
      <Route path="*" element={<Mistake />} />
    </Routes>
  </div>
);
