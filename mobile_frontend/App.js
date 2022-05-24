import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/navigation';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://192.168.101.8:3000/graphql',
  }),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
