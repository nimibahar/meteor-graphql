import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';


//all of our graphql schemas
const typeDefs = `
type Query {
  hi: String
}
`;


//Js resolvers
const resolvers = {
  Query: {
    hi() {
      return "Hello GraphQL"
    }
  }
}

//connect the query and the resolvers (makeExecutable is accpeting those)
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});


//paste it in the Apollo server
createApolloServer({ schema });
