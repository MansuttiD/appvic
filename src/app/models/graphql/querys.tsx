import { gql } from '@apollo/client';

export const SING_IN = gql`
query SignIn($input: SignInInput!) {
    signIn(input: $input) {
      createdAt
      expiresAt
      token
    }
  }
`;
export const GET_PAYMENT_LIST = 'list'


