import { NOTE_FRAGMENT } from './fragments';

export const defaults = {
  notes: [
    {
      __typename: 'Note',
      id: 1,
      title: 'first',
      content: 'Second',
    },
    {
      __typename: 'Note',
      id: 2,
      title: '1111first',
      content: '111Second',
    },
  ],
};
export const typeDefs = [
  `
      expend schema {
          query: Query
          mutation: Mutation
      }
      expend type Query {
          notes: [Note]!
          note(id: Int!): Note
      }
      type Mutation{
        createNote(title: String!, content: String!): Note
        editNote(id: String!, title: String!, content:String!): Note
      }
      type Note{
          id: Int!
          title: String!
          content: String!
      }
      `,
];

export const resolvers = {
  Query: {
    note: (_, variables, { cache }) => {
      const id = cache.config.dataIdFromObject({
        __typename: 'Note',
        id: variables.id,
      });
      const note = cache.readFragment({ fragment: NOTE_FRAGMENT, id });
      console.log(id);
      return note;
    },
  },
};

/*{
  notes @client {
    id
    title
    content
  }
}
*/
