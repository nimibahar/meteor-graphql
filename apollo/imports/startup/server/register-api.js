import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';

const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
}
`;


//all of our graphql schemas
const typeDefs = [
  ResolutionsSchema,
  testSchema
];


//Js resolvers
const resolvers = {
  Query: {
    hi() {
      return "Hello GraphQL"
    },
    resolutions() {
      return [
        {
          _id: "oewijfoiwej",
          name: "Get shit done!"
        },
        {
          _id: "lisnsofinw",
          name: "Make Love not war!"
        }
      ]
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
