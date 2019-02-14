import {GraphQLServer} from "graphql-yoga";
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers: resolvers
    // 그냥
    // resolvers
    // 이렇게 써도 가능하다
});
server.start(() => console.log("GraphQL Server Running"));

