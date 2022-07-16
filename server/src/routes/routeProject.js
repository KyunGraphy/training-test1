const express = require('express')
const router = express.Router()
const Project = require('../model/project')
const prjHandler = require('../controller/projectHandler')

const routeProject = () => {
    router.post('/Add User to Organization', prjHandler.addUsertoOrg)
    router.post('/Create Project', prjHandler.createProByUser)
    router.post('/Find User Project', prjHandler.findAllProjectOfUser)
    router.post('/Find All Organization Projects', prjHandler.findAllProjectOfOrg)
    router.post('/Find All User In Organization', prjHandler.findAllUserOfOrg)
    router.post('/Find All Project', prjHandler.getAllProject)
    router.patch('/Update Project', prjHandler.updateProject)
    // router.delete()
}

module.exports = routeProject
// //get all projects
// router.get('/', async (req, res) => {
//     try {
//         const project = await Project.find()
//         res.json(project)
//     } catch (err) {
//         res.status(500).json({ message: err.message })
//     }
// })

// //get one project
// router.get('/:_id', getProject, (req, res) => {
//     res.json(res.project)
// })

// //create new project
// router.post('/', async (req, res) => {
//     const project = new Project({
//         projectName: req.body.projectName,
//         projectAbout: req.body.projectAbout,
//         projectProgress: req.body.projectProgress,
//         projectBenefit: req.body.projectBenefit,
//         projectRequirement: req.body.projectRequirement,
//         projectDeadline: req.body.projectDeadline
//     })
//     try {
//         const newProject = await project.save()
//         res.status(201).json(newProject)
//     } catch (err) {
//         res.status(400).json({ message: err.message })
//     }
// })

// //update project
// router.patch('/:_id', getProject, (req, res) => {
//     if (req.body.projectName != null) {
//         res.getProject.projectName = req.body.projectName
//     }
//     if (req.body.projectAbout != null) {
//         res.getProject.projectAbout = req.body.projectAbout
//     }
//     if (req.body.projectProgress != null) {
//         res.getProject.projectProgress = req.body.projectProgress
//     }
//     if (req.body.projectBenefit != null) {
//         res.getProject.projectBenefit = req.body.projectBenefit
//     }
//     if (req.body.projectRequirement != null) {
//         res.getProject.projectRequirement = req.body.projectRequirement
//     }
//     if (req.body.projectDeadline != null) {
//         res.getProject.projectDeadline = req.body.projectDeadline
//     }
//     try {
//         const updatedProject = res.project.save()
//         res.json(updatedProject)
//     } catch (err) {
//         res.status(400).json({ message: err.message })
//     }

// })

// //delete project
// router.delete('/:_id', getProject, async (req, res) => {
//     try {
//         await res.project.remove()
//         res.json({ message: 'Project deleted successfully' })
//     } catch (err) {
//         res.status(500).json({ message: err.message })
//     }
// })

// async function getProject(req, res, next) {
//     try {
//         const project = await Project.findById(req.params._id)
//         if (project == null) {
//             return res.status(404).json({ message: 'cannot find project' })
//         }
//     } catch (err) {
//         return res.status(500).json({ message: err.message })
//     }
//     res.project = project
//     next()
// }

// module.exports = routeProject