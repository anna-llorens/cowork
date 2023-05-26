import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        name
        coworks {
          url
          description
        }
      }
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

export const ADD_COWORK = gql`
  mutation addCowork($cowork: CoworkInput) {
    addCowork(cowork: $cowork) {
      companyName
    }
  }
`;

export const SING_UP = gql`
  mutation signup($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

export const CREATE_COWORK = gql`
  mutation PostMutation(
    $description: String!
    $url: String!
    $companyName: String!
  ) {
    post(description: $description, url: $url, companyName: $companyName) {
      id
      createdAt
      url
      description
    }
  }
`;

export const VOTE_MUTATION = gql`
  mutation VoteMutation($linkId: Int!) {
    vote(linkId: $linkId) {
      cowork {
        url
        description
        voters {
          id
        }
      }
      user {
        name
        email
      }
    }
  }
`;
