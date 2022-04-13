import React from 'react';

import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { GeneralButton, GeneralInput } from 'Component/01-common';
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
    navigate('/Login');
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
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
      <GeneralButton type="submit" value="send" />
    </form>
  );
};
