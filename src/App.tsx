import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import style from 'App.module.scss';
import { Preloader } from 'Component/01-common/preloader/Preloader';
import { NavigateMenu, RouteMenu } from 'Component/06-navigate';
import { RouteLink } from 'enum/enum';
import { RootState } from 'redux/store/Store';
import { setAuthInitialTC } from 'redux/thunk';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const isInitialize = useSelector<RootState, boolean>(
    state => state.AppReducer.isInitialize,
  );
  useEffect(() => {
    dispatch(setAuthInitialTC());
  }, []);

  const location = useLocation();
  const pageCard = location.pathname.includes('card');
  const path =
    location.pathname === '/' ||
    location.pathname === RouteLink.profile ||
    location.pathname === RouteLink.pageCard ||
    location.pathname === RouteLink.card ||
    pageCard;
  if (!isInitialize) {
    return <Preloader />;
  }
  return (
    <div className={style.wrapper}>
      <main className={style.page}>
        {path && <NavigateMenu />}
        <div className={style.app__container}>
          <RouteMenu />
        </div>
      </main>
    </div>
  );
};
