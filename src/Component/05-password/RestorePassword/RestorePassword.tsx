import React from 'react';

import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { GeneralButton, GeneralInput } from 'Component/01-common';
import { getMessageNewPassword } from 'redux/selectors';
import { changePasswordTC } from 'redux/thunk';

export const RestorePassword: React.FC = () => {
  const dispatch = useDispatch();
  const messageSentPassword = useSelector(getMessageNewPassword);
  const formik = useFormik({
    initialValues: {
      email: '',
      from: 'test-front-admin <ai73a@yandex.by>',
      message: `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href='http://localhost:3000/CardProject#/newPassword/$token$'>
link</a>
</div>`,
    },
    validate: values => {
      const errors: { email?: string } = {};
      const minLengthPassword = 7;
      if (!values.email) {
        errors.email = 'Required';
      } else if (values.email.length < minLengthPassword) {
        errors.email = 'Min length password 7';
      }
      return errors;
    },
    onSubmit: values => {
      dispatch(changePasswordTC(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <GeneralInput
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onBlurCallback={formik.handleBlur}
          changeInputCallback={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: ' red' }}>{formik.errors.email}</div>
        )}
        <div>
          <GeneralButton type="submit" value="send" />
        </div>
        <div>{messageSentPassword}</div>
      </div>
    </form>
  );
};
