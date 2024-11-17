import { gql } from '@apollo/client';

export const GET_ALL_Questions = gql`
  query {
    getAllQuestion {
      id
      title
    }
  }
`;

export const GET_QUESTION_BY_ID = gql`
  query GetQuestionById($id: ID!) {
    getQuestionById(id: $id) {
      id
      title
      content
      user
    }
  }
`;
