import React from 'react'
import './styles/Content.css'
import Held from './Held'
import Benefit from './Benefit'
import Requirement from './Requirement'
import About from './About'
import Progress from './Progress'

function Content({ project }) {
    return (
        <div className='content'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-4'>
                        <div className='white my-2'>
                            <Held project={project}/>
                        </div>
                        <div className='white my-2'>
                            <Benefit project={project}/>
                        </div>
                        <div className='white my-2'>
                            <Requirement project={project} />
                        </div>
                    </div>
                    <div className='col-8'>
                        <div className='white my-2'>
                            <About project={project}/>
                        </div>
                        <div className='white my-2'>
                            <Progress project={project}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content