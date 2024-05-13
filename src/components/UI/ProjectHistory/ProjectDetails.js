import React, { useState } from 'react';
import '../../../styles/ProjectHistory/ProjectDetails.css';
import { useForm } from 'react-hook-form';

// For Material UI
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const ProjectDetails = () => {
  const form = useForm();
  const { register } = form;

  return (
    <div className="form-data">
      <form>
        <label htmlFor="company">Company</label>
        <input type="text" id="company" {...register('company')} />

        <label htmlFor="position">Position Title</label>
        <input type="text" id="position" {...register('position')} />

        <div className="start-end-dates">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker label="Start Date" views={['year', 'month']} />
          </DemoContainer>
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker label="End Date" views={['year', 'month']} />
          </DemoContainer>
        </LocalizationProvider>
        </div>
        

        <label htmlFor="summary">Summary</label>
        <textarea type="text" id="summary" {...register('summary')} />

        <label htmlFor="description">Description</label>
        <textarea type="text" id="description" {...register('description')} />

        <label htmlFor="mainSkills">Main Skill</label>
        <input type="text" id="mainSkills" {...register('mainSkills')} />

        <label htmlFor="secondarySkills">Secondary Skill</label>
        <input
          type="text"
          id="secondarySkills"
          {...register('secondarySkills')}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default ProjectDetails;
