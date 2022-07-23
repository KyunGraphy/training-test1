import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Content from './Components/DetailPage/Content';
import Overview from './Components/DetailPage/Overview'
import Navigation from './Components/MainPage/Navigation';
import { Link } from 'react-router-dom';
import Project from './Components/MainPage/Project';


function Detail({ prjAPI }) {
  const param = useParams();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(prjAPI + '/' + param.projectsId)
      .then((res) => {
        setProjects(res.data);
        console.log(projects);
      })
      .catch((error) => console.log(error));
    }, []);
    

  return (
    <div className='detail'>
      <Navigation/>
      <Overview project={projects}/>
      <Content project={projects}/>
    </div>
  )
}

export default Detail