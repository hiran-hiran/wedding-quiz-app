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
      q1
      q1a
      q2
      q2a
      title
    }
  }
`
