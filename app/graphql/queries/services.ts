// queries/reviewQueries.ts
import { gql } from '@apollo/client';

export const GET_REVIEWS = gql`
  query GetReviews($productId: ID!) {
    getReviews(productId: $productId) {
      id
      content
      rating
      author {
        name
        email
      }
    }
  }
`;
