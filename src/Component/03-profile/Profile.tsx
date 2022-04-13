import React, { ChangeEvent, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// @ts-ignore
import style from './profile.module.scss';

import { authAPI } from 'api/auth-api/auth-api';
import { GeneralButton } from 'Component/01-common';
import {
  getProfileAvatar,
  getProfileLoginStatus,
  getProfileName,
  getProfilePreloader,
} from 'redux/selectors';
import { logOutTC, setNameTC } from 'redux/thunk';

export const Profile = (): any => {
  const [nameValue, setNameValue] = useState<string>('');
  const name = useSelector(getProfileName);
  const avatar = useSelector(getProfileAvatar);
  const preloader = useSelector(getProfilePreloader);
  const loginStatus = useSelector(getProfileLoginStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    authAPI.auth().then(res => {
      dispatch(setNameTC(res.data));
    });
  }, []);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setNameValue(e.currentTarget.value);
  };
  const onClickHandler = (): void => {
    dispatch(setNameTC({ name: nameValue }));
  };

  const onLogOutClick = (): void => {
    dispatch(logOutTC());
  };
  if (!loginStatus) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={style.profile}>
      <div className={style.profile__profile}>
        {preloader ? (
          'Загрузка данных...'
        ) : (
          <div className={style.profile__avatar}>
            <img src={avatar} alt="avatar" />
          </div>
        )}
        <div className={style.profile__changeAvatar}>
          <input type="file" />
          <button className={style.profile__changeAvatarBtn}>Change Avatar</button>
        </div>
        <div className={style.profile__name}>
          {preloader ? 'Загрузка данных...' : name}
        </div>
        <div className={style.profile__changeName}>
          <input
            type="text"
            placeholder="Changing name"
            value={nameValue}
            onChange={onChangeHandler}
          />
          <button type="button" onClick={onClickHandler}>
            Send
          </button>
        </div>
        <div className={style.profile__btn}>
          <GeneralButton
            type="button"
            value="LogOut"
            disabled={false}
            onClickCallback={onLogOutClick}
          />
        </div>
      </div>
    </div>
  );
};
