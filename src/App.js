import React from 'react';
import Navbar from './components/UI/Navbar';
import ProjectHistory from './components/UI/ProjectHistory/ProjectHistory';
import Authentication from './components/Authentication/Authentication';

function App() {
  //const [backendData, setBackendData] = useState([{}]);

  // useEffect(() => {
  //   fetch('/api')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendData(data);
  //     });
  // }, []);

  // return (
  //   <React.Fragment>
  //     <Navbar />
  //     <ProjectHistory />
  //   </React.Fragment>
  // );
  return (
    <React.Fragment>
      <Authentication />
    </React.Fragment>
  );
}

export default App;
