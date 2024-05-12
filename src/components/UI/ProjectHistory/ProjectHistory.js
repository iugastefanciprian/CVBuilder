import React from 'react';
import ProjectDetails from './ProjectDetails';
import PersonalInformation from './PersonalInformation';

const ProjectHistory = () => {
  return (
    <div>
      <h1>Personal Information</h1>
      <PersonalInformation />
      <h1>Project Experience</h1>
      <ProjectDetails />
      <button>+</button>
    </div>
  );
};

export default ProjectHistory;
