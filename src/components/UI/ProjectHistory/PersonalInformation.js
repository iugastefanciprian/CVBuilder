import React, { useState } from 'react';
import '../../../styles/ProjectHistory/ProjectDetails.css';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PersonalInformation = () => {
  const form = useForm();
  const { register, control } = form;
  const [phone, setPhone] = useState('');

  return (
    <div className="form-data">
      <form>
        <label htmlFor="picture">Profile Picture</label>
        <input type="image" id="picture" {...register('picture')} />

        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register('name')} />

        <label htmlFor="phone">Phone</label>
        <PhoneInput
          {...register('phone')}
          flagUrl={'https://flag.pk/flags/4x3/{xx}.svg'}
          value={phone}
          onChange={(phone) => setPhone(phone)}
          required
        />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email')} />

        <label htmlFor="locaiton">Locaiton</label>
        <input type="text" id="locaiton" {...register('locaiton')} />

        <label htmlFor="linkedin">LinkedIn</label>
        <input type="text" id="linkedin" {...register('linkedin')} />

        <label htmlFor="github">Github</label>
        <input type="text" id="github" {...register('github')} />

        <label htmlFor="whatsapp">Whatsapp</label>
        <input type="text" id="whatsapp" {...register('whatsapp')} />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default PersonalInformation;
