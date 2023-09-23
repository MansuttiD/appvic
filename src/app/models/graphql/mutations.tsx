import { gql } from '@apollo/client';


export const CREATE_USER = gql`
mutation CreateUser($input: SignUpInput!) {
  user: signUp(input: $input) {
    token
  }
}
`;
export const SEND_PAYMENT_DATA = 'payment'