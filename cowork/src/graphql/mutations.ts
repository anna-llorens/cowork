import { gql } from "@apollo/client";

export const ADD_COWORK = gql`
  mutation addCowork($cowork: CoworkInput) {
    addCowork(cowork: $cowork) {
      companyName
    }
  }
`;
