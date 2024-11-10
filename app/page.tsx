"use client";
import React, { useEffect } from 'react';
import Banner from '@/Components/Banner/Banner';
import InfoBanner from '@/Components/InfoBanner/InfoBanner';
import Services from '@/Components/Services/Services';
import Menu from '@/Components/Menu/Menu';
import ExtraServices from '@/Components/ExtraServices/ExtraServices';
import ScrollableServices from '@/Components/ScrollableItems/ScrollableItems';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const GET_SCHEMA = gql`
 query {
  collections
}


`;

const HomePage = () => {
  // Initialize Apollo Client
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL, // Make sure this is defined in your .env.local file
    cache: new InMemoryCache(),
  });

  // Fetch schema data on mount
  useEffect(() => {
    client
      .query({ query: GET_SCHEMA })
      .then((response) => {
        console.log('GraphQL Schema:', response.data.__schema.types);
      })
      .catch((error) => {
        console.error('Error fetching schema:', error);
      });
  }, [client]);

  return (
    <div className='flex flex-col justify-center gap-2 w-full sm:w-[80%]'>
      <InfoBanner />
      <Banner
        title='neuroanatomy books'
        subTitle='a pioneering interactive approach to the teaching of neuroanatomy'
        buttonText='shop now'
        imgurl='./image.jpeg'
      />
      <Services />
      <Menu />
      <ExtraServices />
      <ScrollableServices />
      <div>
        <h1>GraphQL Schema</h1>
        <p>Check your browser console for the list of types and fields from the GraphQL schema.</p>
      </div>
    </div>
  );
};

export default HomePage;
