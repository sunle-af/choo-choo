import { ApolloServer, gql } from "apollo-server";
import { resolvers } from "./resolvers.js";
import {readFile} from 'fs/promises'
const typeDefs = await readFile('./schema.graphql' , 'utf-8')

const server = new ApolloServer({typeDefs, resolvers});
const {url} = await server.listen({port:9000});
console.log(`Server is running at ${url}`) 