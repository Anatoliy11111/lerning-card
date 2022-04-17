import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from 'App.module.scss';
import { Preloader } from 'Component/01-common/preloader/Preloader';
import { NavigateMenu, RouteMenu } from 'Component/06-navigate';
import { getIsinitiolazed } from 'redux/selectors/selectorsApp/selectorsApp';
import { setNameTC } from 'redux/thunk';

export const App: React.FC = () => {
  const dispatch = useDispatch();

  const isInitialize = useSelector(getIsinitiolazed);

  useEffect(() => {
    dispatch(setNameTC());
  }, []);

  if (!isInitialize) {
    return <Preloader />;
  }

  return (
    <div className={style.wrapper}>
      <main className={style.page}>
        <NavigateMenu />
        <div className={style.app__container}>
          <RouteMenu />
        </div>
      </main>
    </div>
  );
};
