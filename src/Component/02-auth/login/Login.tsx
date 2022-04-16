import React, { useEffect } from 'react';

import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import style from '../auth.module.scss';
import { ValidErrorType } from '../registration/ Registration';

import { GeneralButton, GeneralCheckbox, GeneralInput } from 'Component/01-common';
import { getErrorLogin, getIsLoginIn } from 'redux/selectors';
import { loginTC, setNameTC } from 'redux/thunk';

export const Login: React.FC = () => {
  const dispatch = useDispatch();

  const errorLogin = useSelector(getErrorLogin);
  const isLoginIn = useSelector(getIsLoginIn);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },

    validate: (values): {} => {
      const errors: ValidErrorType = {};
      const minLengthPassword = 7;
      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < minLengthPassword) {
        errors.password = 'Min length password 7';
      }

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
    onSubmit: values => {
      dispatch(loginTC(values));
    },
  });

  if (isLoginIn) {
    return <Navigate to="/profile" />;
  }
  return (
    <div className={style.login}>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <h2 className={style.form__title}>IT-Incubator</h2>
        <h2 className={style.form__subtitle}>Sing In</h2>
        <div className={style.form__item}>
          <label className={style.form__label} htmlFor="email">
            Email{' '}
          </label>
          <GeneralInput
            changeInputCallback={formik.handleChange}
            value={formik.values.email}
            name="email"
            id="email"
            onBlurCallback={formik.handleBlur}
            type="email"
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: ' red' }}>{formik.errors.email}</div>
          )}
        </div>
        <div className={style.form__item}>
          <label className={style.form__label} htmlFor="password">
            Password{' '}
          </label>
          <GeneralInput
            type="password"
            onBlurCallback={formik.handleBlur}
            id="password"
            name="password"
            changeInputCallback={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: ' red' }}>{formik.errors.password}</div>
          )}
        </div>
        <div className={`${style.form__item} ${style.form__item_checkbox}`}>
          <label className={style.form__label} htmlFor="rememberMe">
            RememberMe{' '}
          </label>
          <GeneralCheckbox
            checked={formik.values.rememberMe}
            id="rememberMe"
            name="rememberMe"
            onChangeCallback={formik.handleChange}
          />
        </div>
        <div>
          <Link to="/NewPassword" className={style.form__link}>
            Forgot Password?
          </Link>
        </div>
        <div className={style.form__btn}>
          <GeneralButton value="Login" type="submit" />
        </div>
        <div className={style.form__error}>{errorLogin}</div>

        <div>
          <p className={style.form__text}>Don’t have an account?</p>
          <Link
            to="/Registration"
            className={`${style.form__link} ${style.form__link_reg}`}
          >
            Sing In
          </Link>
        </div>
        <p>1qazxcvBG</p>
      </form>
    </div>
  );
};
