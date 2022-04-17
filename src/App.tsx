import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import style from 'App.module.scss';
import { Preloader } from 'Component/01-common/preloader/Preloader';
import { NavigateMenu, RouteMenu } from 'Component/06-navigate';
import { RootState } from 'redux/store/Store';
import { setNameTC } from 'redux/thunk';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const isInitialize = useSelector<RootState, boolean>(
    state => state.AppReducer.isInitialize,
  );
  useEffect(() => {
    dispatch(setNameTC());
  }, []);

  const location = useLocation();
  const path =
    location.pathname === '/profile' ||
    location.pathname === '/pageCard' ||
    location.pathname === '/selectCard';

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
