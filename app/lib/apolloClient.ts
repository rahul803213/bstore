import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL, // Set this in your .env file
  cache: new InMemoryCache(),
});

export default client;
