import { gql } from "@apollo/client";

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
