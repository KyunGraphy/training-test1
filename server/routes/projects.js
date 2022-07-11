const express = require('express')
const router = express.Router()
const Project = require('../models/project')

//get all projects
router.get('/', async (req, res) => {
  try {
      const project = await Project.find()
      res.jsonp(project)
  }  catch (err) {
      res.status(500).json({message: err.message})
  }
})

//get one project
router.get('/:p_id', getProject, (req, res) => {
  res.json(res.project)
})

//create new project
router.post('/', async (req, res) => {
  const project = new Project({
    p_id: req.body.p_id,
    full_name: req.body.full_name
  })
  try {
    const newproject = await project.save()
    res.status(201).json(newproject)
  } catch (err) {
    res.status(400).json({message: err.message})
  }
})

//update project
router.patch('/:p_id', getProject, (req, res) => {
  if (req.body.p_id != null) {
    res.getProject.p_id = req.body.p_id
  }
  if (req.body.full_name != null) {
    res.getProject.full_name = req.body.full_name
  }
try {
    const updatedProject = res.Project.save()
    res.json(updatedProject)
} catch (err) {
    res.status(400).json({message: err.message})
}
  
})

//delete project
router.delete('/:p_id', getProject, async (req, res) => {
  try {
    await res.project.remove()
    res.json({message: 'removed'})
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})


async function getProject(req, res, next) {
  try {
    const project = await Project.findById(req.params.id)
    if (project == null) {
      return res.status(404).json({ message: 'Project not found' })
    }
    res.json(project)
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  res.project = project
  next()
}

module.exports = router