import mongoose from 'mongoose'
const studentSchema = new mongoose.Schema(
  {
    active: Boolean,
    campus_id: Number,
    dob: Date,
    ethnicity: String,
    gender: String,
    grade: String,
    name: {
      first: String,
      last: String,
      middle: String,
    },
    race: String,
    student_id: Number,
  },
  { timestamps: true }
)

const Student = new mongoose.model('Student', studentSchema)

export default Student
