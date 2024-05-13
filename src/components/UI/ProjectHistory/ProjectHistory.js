import React, {useState} from 'react';
import ProjectDetails from './ProjectDetails';
import PersonalInformation from './PersonalInformation';

const ProjectHistory = () => {
  const [jobs, setJobs] = useState(0);

  return (
    <div>
      <h1>Personal Information</h1>
      <PersonalInformation />
      <h1>Project Experience</h1>
      
      <button>Add Job</button>
    </div>
  );
};

export default ProjectHistory;
