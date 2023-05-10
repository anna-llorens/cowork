import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        coworks {
          url
          description
        }
      }
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
