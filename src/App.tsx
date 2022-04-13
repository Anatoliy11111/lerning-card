import React from 'react';

import style from 'App.module.scss';
import { NavigateMenu, RouteMenu } from 'Component/06-navigate';

export const App: React.FC = () => (
  <div className={style.wrapper}>
    <main className={style.page}>
      <div className={style.app__container}>
        <NavigateMenu />
        <RouteMenu />
      </div>
    </main>
  </div>
);
