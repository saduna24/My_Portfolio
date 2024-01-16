import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const ContactSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email('Enter a valid email'),
  message: yup.string().required('Message is required'),
});

const Contact = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="name" ref={register} />
      {errors.name && <span>{errors.name.message}</span>}
      
      <input type="email" name="email" ref={register} />
      {errors.email && <span>{errors.email.message}</span>}
      
      <textarea name="message" ref={register} />
      {errors.message && <span>{errors.message.message}</span>}
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default Contact;
