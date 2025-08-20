import { Formik, Form, Field } from "formik";
import css from "./FeedbackForm.module.css";
export default function FeedbackForm() {
  return (
    <>
      {/* Для додавання полів форми використовується компонент Field, який за
      замовчуванням рендерить тег input. Кожному полю обов'язково потрібно
      вказати атрибут name, так само, як і при роботі з звичайним тегом input. */}
      {/* initialValues - об'єкт початкових значень полів, наразі передамо порожній
      об'єкт. onSubmit - функція, яка буде викликана при сабміті форми. */}
      <Formik initialValues={{}} onSubmit={() => {}}>
        {/* Компонент Formik не стилізується, оскільки не рендерить жодного тегу, а
        зберігає логіку роботи з формою. */}
        <Form className={css.form}>
          {/* Для додавання полів форми використовується компонент Field, який за
          замовчуванням рендерить тег input. Кожному полю обов'язково потрібно
          вказати атрибут name, так само, як і при роботі з звичайним тегом
          input. */}
          <Field className={css.field} type="text" name="username" />
          <Field className={css.field} type="email" name="email" />
          <button classname={css.btn} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
}
