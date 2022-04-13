import React, { memo } from 'react';

import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import style from '../auth.module.scss';

import { GeneralButton, GeneralInput } from 'Component/01-common';
import { getErrorRegistration, getIsRegistration } from 'redux/selectors';
import { isRegistrationTC } from 'redux/thunk';

export type ValidErrorType = {
  email?: string;
  password?: string;
  rememberMe?: boolean;
};

export const Registration: React.FC = memo(() => {
  const dispatch = useDispatch();
  const errorRegistration = useSelector(getErrorRegistration);
  const isRegistration = useSelector(getIsRegistration);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: values => {
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
      dispatch(isRegistrationTC(values));
    },
  });

  if (isRegistration) {
    return <Navigate to="/Login" />;
  }
  return (
    <form onSubmit={formik.handleSubmit} className={style.form}>
      <h2 className={style.form__title}>IT-Incubator</h2>
      <h2 className={style.form__subtitle}>Sing In</h2>
      <div>
        <div className={style.form__body}>
          <div className={style.form__item}>
            <label className={style.form__label} htmlFor="email">
              Email{' '}
            </label>
            <GeneralInput
              value={formik.values.email}
              onBlurCallback={formik.handleBlur}
              changeInputCallback={formik.handleChange}
              type="email"
              id="email"
              name="email"
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <p style={{ color: 'red' }}>{formik.errors.email}</p>
          )}
          <div className={style.form__item}>
            <label className={style.form__label} htmlFor="password">
              Password{' '}
            </label>
            <GeneralInput
              value={formik.values.password}
              changeInputCallback={formik.handleChange}
              onBlurCallback={formik.handleBlur}
              type="password"
              id="password"
              name="password"
            />
            {formik.touched.password && formik.errors.password && (
              <p style={{ color: 'red' }}>{formik.errors.password}</p>
            )}
          </div>
        </div>
        <div className={style.form__error}>{errorRegistration}</div>
        <div className={style.form__btn}>
          <GeneralButton type="submit" value="Register" />
        </div>
      </div>
    </form>
  );
});
