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
