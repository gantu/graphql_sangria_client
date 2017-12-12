export const typeDefs = `

type Channel {
  id: Int!
  name: String
}

type Query {
  allChannels: [Channel]
}
`;
