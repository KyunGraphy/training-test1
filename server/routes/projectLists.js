const express = require('express')
const router = express.Router()
const ProjectList = require('../models/projectList')

//get all projects
router.get('/', async (req, res) => {
    try {
        const projectList = await ProjectList.find()
        res.json(projectList)
    }   catch (err) {
        res.status(500).json({message: err.message})
    }
  }) 

  //get one project
  router.get('/:p_id', getProjectList, (req, res) => {
    res.json(res.projectList)
  })
  
  //create new project
  router.post('/', async (req, res) => {
    const projectlist = new ProjectList({
        p_name: req.body.p_name,
        p_desc: req.body.p_desc,
        p_benefit: req.body.p_benefit,  
        p_req: req.body.p_req,
        p_progress: req.body.p_progress
    })
  try {
    const newprojectList = await projectlist.save()
    res.status(201).json(newprojectList)
  }  catch (err) {
  res.status(400).json({message: err.message})
    }
})
  
  //update project
  router.patch('/:p_id', getProjectList, (req, res) => {
    if (req.body.p_name != null) {
        res.getProjectList.p_name = req.body.p_name
    }
    if (req.body.p_desc != null) {
        res.getProjectList.p_desc = req.body.p_desc
    }
    if (req.body.p_benefit != null) {
        res.getProjectList.p_benefit = req.body.p_benefit
    }
    if (req.body.p_req!= null) {
        res.getProjectList.p_req = req.body.p_req
    }
    if (req.body.p_progress != null) {
        res.getProjectList.p_progress = req.body.p_progress
    }
    try {
        const updatedProjectList = res.projectList.save()
        res.json(updatedProjectList)
    }  catch (err) {
        res.status(400).json({message: err.message})
    }

})
  
  //delete project
  router.delete('/:p_id', getProjectList, async (req, res) => {
   try {
    await res.projectlist.remove()
    res.json({message: 'Project deleted successfully'})
   }    catch (err) {
        res.status(500).json({message: err.message})
   }
  })

  async function getProjectList(req, res, next) {
    try {
        const projectlist = await ProjectList.findById(req.params.p_id)
        if (projectlist == null) {
            return res.status(404).json({message: 'cannot find project'})
        }
    }   catch (err) {
        return res.status(500).json({message: err.message})
    }
    res.projectlist = projectlist
    next()
  }

module.exports = router