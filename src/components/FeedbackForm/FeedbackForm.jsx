import { Formik, Form, Field } from "formik";
import { useId } from "react";
import css from "./FeedbackForm.module.css";

const initialValues = {
  username: "",
  email: "",
};

export default function FeedbackForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();
  //values - об'єкт значень полів форми в момент її відправки.
  // actions - об'єкт з допоміжними методами. Наприклад, метод resetForm

  // Функція відправки форми не отримує об'єкт події, що є зайвим. Formik в момент відправки форми:
  //     викликає метод preventDefault, щоб уникнути перезавантаження сторінки;
  //     збирає значення полів форми в один зручний об'єкт, де ім'я властивості - це ім'я поля, а значення поля - це значення властивості.
  // Отже, нам не потрібно турбуватися про оголошення стану, його зміну і збір значень полів форми. Вся рутина з формою зроблена за нас!
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <>
      {/* Для додавання полів форми використовується компонент Field, який за замовчуванням рендерить тег input. Кожному полю обов'язково потрібно вказати атрибут name, так само, як і при роботі з звичайним тегом input. */}
      {/* initialValues - об'єкт початкових значень полів, наразі передамо порожній об'єкт. onSubmit - функція, яка буде викликана при сабміті форми. */}
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {/* Компонент Formik не стилізується, оскільки не рендерить жодного тегу, а зберігає логіку роботи з формою. */}
        <Form className={css.form}>
          {/* Для додавання полів форми використовується компонент Field, який за замовчуванням рендерить тег input. Кожному полю обов'язково потрібно вказати атрибут name, так само, як і при роботі з звичайним тегом input. */}
          <label htmlFor={nameFieldId}>Username</label>
          <Field
            className={css.field}
            type="text"
            name="username"
            id={nameFieldId}
          />
          <label htmlFor={emailFieldId}></label>
          <Field
            className={css.field}
            type="email"
            name="email"
            id={emailFieldId}
          />
          <button className={css.btn} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
}
