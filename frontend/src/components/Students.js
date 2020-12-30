import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listStudents } from '../redux/actions/studentActions'
import Loader from './Loader'
import Message from './Message'

const Students = () => {
  const dispatch = useDispatch()

  const studentsState = useSelector((state) => state.studentsState)
  const { loading, error, students } = studentsState

  useEffect(() => {
    dispatch(listStudents())
  }, [dispatch])

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <ul>
          {students.map((stu) => (
            <li>
              {stu.name.last}, {stu.name.first}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Students