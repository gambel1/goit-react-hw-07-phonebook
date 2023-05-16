import { getContacts } from 'redux/selectors';
import { addContacts } from 'api/api';
import {
  FormContainer,
  FormWrapper,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const schema = yup.object().shape({
  name: yup.string().min(2).max(70).required(),
  number: yup.number().min(4).required(),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleFormSubmit = (values, { resetForm }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      return Notify.failure(`${values.name} is already in contacts`);
    }
    dispatch(addContacts({ ...values }));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={schema}
      >
        <FormContainer>
          <FormWrapper>
            <FormLabel htmlFor="name">Name:</FormLabel>
            <FormInput name="name" type="text" id="name" />
            <ErrorMessage name="name" />
          </FormWrapper>

          <FormWrapper>
            <FormLabel htmlFor="number">Number:</FormLabel>
            <FormInput name="number" type="tel" id="number" />
            <ErrorMessage name="number" />
          </FormWrapper>

          <FormButton type="submit">Add contact</FormButton>
        </FormContainer>
      </Formik>
    </>
  );
}
