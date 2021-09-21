import { gql } from '@apollo/client'

export const GET_ADMIN_USER = gql`
  query getAdminUser {
    admin_user {
      id
      name
      created_at
    }
  }
`

export const GET_QUIZ = gql`
  query getQuiz {
    quiz {
      id
      created_at
      title
      q1
      q1a
      q2
      q2a
      q3
      q3a
      q4
      q4a
      q5
      q5a
      q6
      q6a
      q7
      q7a
      q8
      q8a
      q9
      q9a
      q10
      q10a
    }
  }
`

export const GET_QUIZ_BY_ID = gql`
  query getQuizById($id: uuid!) {
    quiz_by_pk(id: $id) {
      id
      created_at
      title
      q1
      q1a
      q2
      q2a
      q3
      q3a
      q4
      q4a
      q5
      q5a
      q6
      q6a
      q7
      q7a
      q8
      q8a
      q9
      q9a
      q10
      q10a
    }
  }
`

export const GET_GUEST_USERS = gql`
  query getGuestUsers($quizId: uuid!) {
    guest_user(
      where: { quiz_id: { _eq: $quizId } }
      order_by: { point: desc }
    ) {
      id
      name
      quiz_id
      seat_no
      point
      q1a
      q2a
      q3a
      q4a
      q5a
      q6a
      q7a
      q8a
      q9a
      q10a
    }
  }
`

export const GET_GUEST_USER_BY_PK = gql`
  query getGuestUserByPk($id: uuid!) {
    guest_user_by_pk(id: $id) {
      id
      name
      quiz_id
      seat_no
      point
      q1a
      q2a
      q3a
      q4a
      q5a
      q6a
      q7a
      q8a
      q9a
      q10a
    }
  }
`
