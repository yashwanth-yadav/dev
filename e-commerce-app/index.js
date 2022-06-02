const { ApolloServer } = require("apollo-server");
// const { products, categories } = require("./db");

const { typeDefs }=require("./schema");

const {Query}=require("./resolvers/Query");
const {Product}=require("./resolvers/Product");
const {Category}=require("./resolvers/Category");
const {Mutation}=require("./resolvers/Mutation");
const { db } = require("./db");


const server = new ApolloServer({
  typeDefs,
  resolvers:{
    Query,
    Category,
    Mutation,
    Product,
  },
  context: {
   db
  },
});

server.listen().then(({ url }) => {
  console.log("Server is ready at url : " + url);
});
