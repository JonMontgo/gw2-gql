"use strict";

const express = require("express");
const { ApolloServer, gql } = require('apollo-server-express');

const { resolvers, typeDefs } = require('./schema');

const server = new ApolloServer ({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const port = 3000 || process.env.GQL_PORT;

app.listen({ port }, ()=> {
  console.log(`Server running on ${port}`);
});
