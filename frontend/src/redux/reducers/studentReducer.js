import {
  STUDENTS_LIST_REQUEST,
  STUDENTS_LIST_SUCCESS,
  STUDENTS_LIST_FAIL,
  STUDENT_DETAIL_REQUEST,
  STUDENT_DETAIL_SUCCESS,
  STUDENT_DETAIL_FAIL,
} from '../constants'

export const studentsReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case STUDENTS_LIST_REQUEST:
      return { loading: true, students: [] }
    case STUDENTS_LIST_SUCCESS:
      return { loading: false, students: action.payload }
    case STUDENTS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const studentReducer = (state = { student: {} }, action) => {
  switch (action.type) {
    case STUDENT_DETAIL_REQUEST:
      return { loading: true, student: {} }
    case STUDENT_DETAIL_SUCCESS:
      return { loading: false, student: action.payload }
    case STUDENT_DETAIL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
