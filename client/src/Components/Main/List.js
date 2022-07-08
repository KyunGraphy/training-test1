import React from 'react'
import axios from 'axios'

function List({ prjAPI }) {
    axios.get(prjAPI)
      .then(res => {
        const project = res.data;
        console.log(project);
      })
      .catch(error => console.log(error));

  return (
    <div className='list'>

    </div>
  )
}

export default List