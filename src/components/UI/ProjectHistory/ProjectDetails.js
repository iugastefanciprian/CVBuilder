import React from 'react';
import '../../../styles/ProjectHistory/ProjectDetails.css';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const ProjectDetails = () => {
  const form = useForm();
  const { register, control } = form;

  return (
    <div className="form-data">
      <form>
        <label htmlFor="company">Company</label>
        <input type="text" id="company" {...register('company')} />

        <label htmlFor="position">Position Title</label>
        <input type="text" id="position" {...register('position')} />

        <label htmlFor="summary">Summary</label>
        <input type="text" id="summary" {...register('summary')} />

        <label htmlFor="description">Description</label>
        <input type="text" id="description" {...register('description')} />

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
      <DevTool control={control} />
    </div>
  );
};

export default ProjectDetails;
