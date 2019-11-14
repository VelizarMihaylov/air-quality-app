import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://localhost:4445/graphql'
})

export default client
