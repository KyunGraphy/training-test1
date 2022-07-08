const express = require('express')
const router = express.Router()

//get all projects
router.get('/', (req, res) => {
  res.send('eh')
  //res.render('projects', { title: 'Projects' })
})

//get one project
router.get('/:id', (req, res) => {
  res.render('projects', { title: 'Projects' })
})

//create new project
router.post('/', (req, res) => {
    res.render('projects', { title: 'Projects' })
  })

//update project
router.put('/:id', (req, res) => {
  res.render('projects', { title: 'Projects' })
})

//delete project
router.delete('/:id', (req, res) => {
  res.render('projects', { title: 'Projects' })
})

//add project
router.post('/:id/add', (req, res) => {
  res.render('projects', { title: 'Projects' })
})
module.exports = router