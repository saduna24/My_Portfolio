import React, { useEffect } from 'react';
import axios from 'axios';

const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/projects');
        setProjects(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return projects;
};

const Projects = () => {
  const projects = useFetchProjects();

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
};

export default Projects;
