import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';

import { typeDefs, defaults, resolvers } from './clientState';

const cache = new InMemoryCache();

// 앱에 필요한 로직을 넣어둬야함
const stateLink = withClientState({
  cache,
  typeDefs,
  defaults,
  resolvers,
});

// Error link ,websocket link등 여기다가 추가해주는것
const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink]),
});

export default client;
