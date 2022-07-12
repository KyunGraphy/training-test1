import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Overview from './Components/Detail/Overview'

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
      <Overview project={projects}/>
    </div>
  )
}

export default Detail