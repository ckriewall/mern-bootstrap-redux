import {
  STUDENTS_LIST_REQUEST,
  STUDENTS_LIST_SUCCESS,
  STUDENTS_LIST_FAIL,
  STUDENT_DETAIL_REQUEST,
  STUDENT_DETAIL_SUCCESS,
  STUDENT_DETAIL_FAIL,
} from '../constants'
import axios from 'axios'

export const listStudents = () => async (dispatch) => {
  try {
    dispatch({ type: STUDENTS_LIST_REQUEST })

    const { data } = await axios.get('/api/students')

    dispatch({
      type: STUDENTS_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: STUDENTS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getStudent = (id) => async (dispatch) => {
  try {
    dispatch({ type: STUDENT_DETAIL_REQUEST })

    const { data } = await axios.get(`/api/students/${id}`)

    dispatch({
      type: STUDENT_DETAIL_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: STUDENT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
