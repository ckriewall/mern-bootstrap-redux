import express from 'express'
import Student from '../models/Student.js'

const router = express.Router()

// @desc    Get Students
// @route   GET /api/students
router.get('/', async (req, res) => {
  const students = await Student.find()
  res.json(students)
})

// @desc    Get Student By Id
// @route   GET /api/students/:id
router.get('/:id', async (req, res) => {
  await Student.findById(req.params.id, (err, found) => {
    if (!err) {
      res.json(found)
    } else {
      res.json(err)
    }
  })
})

export default router
