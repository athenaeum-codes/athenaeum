
import { gql } from 'apollo-server';

const typeDefs = gql`
  # Your schema will go here
  type Query {
      collections: [Collection]
      collection(id: ID!): Collection
      me: User
  }

  type Collection {
      things: [Thing]
  }

  interface Thing {
      id: ID!
      title: String
      author: Author
      description: String
      isBooked: Boolean!
  }

  type Book implements Thing {
      id: ID!
      title: String
      author: Author
      description: String
      isBooked: Boolean!
      name: String
      type: String
  }

  type User {
      id: ID!
      email: String
      name: String
  }

  type Author {
      fullName: String
      firstName: String
      lastName: String
  }

  type Mutation {
      addBook(name: String, type: String): IGraphqlResponse

      login(email: String): String
  }

  interface IGraphqlResponse {
      status: Int
  }
`;

export default typeDefs;
