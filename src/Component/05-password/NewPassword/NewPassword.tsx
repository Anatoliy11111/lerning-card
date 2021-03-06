import React from 'react';

import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import style from '../RestorePassword/RestorePassword.module.scss';

import { GeneralButton, GeneralInput } from 'Component/01-common';
import { RouteLink } from 'enum/enum';
import { createNewPassword, errorCreateNewPassword } from 'redux/selectors';
import { CreateNewPasswordPasswordTC } from 'redux/thunk';

export const NewPassword: React.FC = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const errorMessage = useSelector(errorCreateNewPassword);
  const isNewPassword = useSelector(createNewPassword);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: '',
      resetPasswordToken: token,
    },
    validate: values => {
      const errors: { password?: string } = {};
      const minLengthPassword = 7;
      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < minLengthPassword) {
        errors.password = 'Min length password 7';
      }
      return errors;
    },
    onSubmit: values => {
      dispatch(CreateNewPasswordPasswordTC(values));
    },
  });
  if (isNewPassword) {
    navigate(RouteLink.login);
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={style.containerChangePassword}>
        <div className={style.forgotPassword}>
          <h1>it-incubator</h1>
          <h2>Forgot your password?</h2>
          <div className={style.item}>
            <label className={style.label} htmlFor="password">
              Password{' '}
            </label>
            <GeneralInput
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onBlurCallback={formik.handleBlur}
              changeInputCallback={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password && (
              <div style={{ color: ' red' }}>{formik.errors.password}</div>
            )}
          </div>
          {errorMessage}
          <p>Create new password and we will send you further instructions to email </p>
          <div className={style.btn}>
            <GeneralButton type="submit" value="Create new password" />
          </div>
        </div>
      </div>
    </form>
  );
};
