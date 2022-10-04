//*Authorization

// *Import base
import styles from './authorization.module.scss';
import classNames from 'classnames';

// *Import Formik libraries for creating forms
import { useFormik } from 'formik';

// *Import Yup libraries for validation forms
import * as Yup from 'yup';

const Authorization = ({ active, setActive }) => {
  //*Formik
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    //*Validation
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Неправильна email адреса')
        .required("Обов'язкове поле!"),
      password: Yup.string()
        .min(6, 'Мінімум 6 символів')
        .required("Обов'язкове поле!"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log(JSON.stringify(values, null, 2));
      setTimeout(() => {
        setSubmitting(false);
        resetForm();
      }, 400);
    },
  });
  //*Sending data form
  fetch(
    'https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration',
    {
      method: 'POST',
      headers: { Authorization: 'form authorization' },
      body: JSON.stringify(formik),
    }
  )
    .then((response) => response.json())
    .then((result) => console.log(result));
  return (
    <div
      //*Сonditions for switching styles in mode active
      className={
        active ? classNames(styles.modal, styles.active) : styles.modal
      }
      onClick={() => setActive(false)}
    >
      {/* Form */}
      <form
        className={styles.form}
        method='post'
        onSubmit={formik.handleSubmit}
      >
        {/* Title form */}
        <h2 className={styles.title}>АВТОРИЗАЦІЯ</h2>
        <div className={styles.wrapper}>
          {/* Email */}
          <label className={styles.label} htmlFor='email'></label>
          <input
            className={classNames(styles.input, styles.email)}
            name='email'
            placeholder='Пошта'
            type='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onClick={(e) => e.stopPropagation()}
          />
          {/* Conditions for including a style error */}
          {formik.errors.email && formik.touched.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
          ) : null}
          {/* Password */}
          <label className={styles.label} htmlFor='password'></label>
          <input
            className={classNames(styles.input, styles.password)}
            name='password'
            placeholder='Пароль'
            type='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onClick={(e) => e.stopPropagation()}
          />
          {/* Conditions for including a style error */}
          {formik.errors.password && formik.touched.password ? (
            <div className={styles.error}>{formik.errors.password}</div>
          ) : null}
          {/* Buttons */}
          <div className={styles.button}>
            <button
              className={styles.buttonSubmit}
              type='submit'
              onClick={(e) => e.stopPropagation()}
            >
              <span>ВХІД</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Authorization;
