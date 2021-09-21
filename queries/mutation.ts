import { gql } from '@apollo/client'

export const UPDATE_QUIZ = gql`
  mutation updateQuiz(
    $id: uuid!
    $q1: String!
    $q1a: String!
    $q2: String!
    $q2a: String!
    $q3: String!
    $q3a: String!
    $q4: String!
    $q4a: String!
    $q5: String!
    $q5a: String!
    $q6: String!
    $q6a: String!
    $q7: String!
    $q7a: String!
    $q8: String!
    $q8a: String!
    $q9: String!
    $q9a: String!
    $q10: String!
    $q10a: String!
  ) {
    update_quiz_by_pk(
      pk_columns: { id: $id }
      _set: {
        q1: $q1
        q1a: $q1a
        q2: $q2
        q2a: $q2a
        q3: $q3
        q3a: $q3a
        q4: $q4
        q4a: $q4a
        q5: $q5
        q5a: $q5a
        q6: $q6
        q6a: $q6a
        q7: $q7
        q7a: $q7a
        q8: $q8
        q8a: $q8a
        q9: $q9
        q9a: $q9a
        q10: $q10
        q10a: $q10a
      }
    ) {
      id
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

export const INSERT_GUEST_USER = gql`
  mutation insertGuestUser($name: String!, $seat_no: String, $quiz_id: uuid!) {
    insert_guest_user_one(
      object: { name: $name, seat_no: $seat_no, quiz_id: $quiz_id }
    ) {
      id
      name
      quiz_id
      seat_no
    }
  }
`

export const UPDATE_GUEST_USER = gql`
  mutation updateGuestUser(
    $id: uuid!
    $point: Int
    $q1a: String
    $q2a: String
    $q3a: String
    $q4a: String
    $q5a: String
    $q6a: String
    $q7a: String
    $q8a: String
    $q9a: String
    $q10a: String
  ) {
    update_guest_user_by_pk(
      pk_columns: { id: $id }
      _set: {
        q1a: $q1a
        q2a: $q2a
        q3a: $q3a
        q4a: $q4a
        q5a: $q5a
        q6a: $q6a
        q7a: $q7a
        q8a: $q8a
        q9a: $q9a
        q10a: $q10a
        point: $point
      }
    ) {
      id
      name
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
