import React from 'react';

import { useLocation, useParams, useSearchParams } from 'react-router-dom';

import style from 'App.module.scss';
import { NavigateMenu, RouteMenu } from 'Component/06-navigate';

export const App: React.FC = () => {
  const location = useLocation();
  const path = location.pathname === '/profile' || location.pathname === '/pageCard';

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
