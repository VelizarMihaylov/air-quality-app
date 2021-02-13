import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

const httpLink = createHttpLink({
  uri: 'https://apollo-server-koa-starter-6e980c.eu1.kinto.io'
})

const client = new ApolloClient({
  ssrMode: false,
  link: httpLink,
  cache: new InMemoryCache()
})

export default client
