import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import PhoneInput from 'react-phone-input-2';
import validator from 'validator';

import 'react-phone-input-2/lib/style.css';
import '../../../styles/ProjectHistory/ProjectDetails.css';

const PersonalInformation = () => {
  const form = useForm();
  const { register, control, handleSubmit } = form;
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (value) => {
    if (validator.isURL(value)) {
      setErrorMessage('Is Valid URL');
    } else {
      setErrorMessage('Is Not Valid URL');
    }
  };

  const onSubmit = (data) => {
    console.log('Form Submitted', { ...data, phone: '+' + phone });
  };

  return (
    <div className="form-data">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="picture">Profile Picture</label>
        <input type="file" id="picture" {...register('picture')} />

        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register('name')} />

        <label htmlFor="phone">Phone</label>
        <PhoneInput
          id="phone"
          defaultCountry="ro"
          className="phone-input"
          flagUrl={'https://flag.pk/flags/4x3/{xx}.svg'}
          value={phone}
          onChange={(phone) => setPhone(phone)}
          country={'ro'}
          inputStyle={{
            background: '#242424',
          }}
          required
        />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email')} />

        <label htmlFor="locaiton">Locaiton</label>
        <input type="text" id="locaiton" {...register('locaiton')} />

        <label htmlFor="linkedin">LinkedIn</label>
        <input
          type="text"
          id="linkedin"
          {...register('linkedin')}
          onChange={(e) => validate(e.target.value)}
        />

        <label htmlFor="github">Github</label>
        <input
          type="text"
          id="github"
          {...register('github')}
          onChange={(e) => validate(e.target.value)}
        />

        <label htmlFor="whatsapp">Whatsapp</label>
        <input type="text" id="whatsapp" {...register('whatsapp')} />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default PersonalInformation;
