const { ApolloServer } = require('apollo-server-express')
const fs = require('fs');
const firebase = require('firebase');

const auth = firebase.auth();
const apiResolvers = {

    Query: {

        signupUser: async function(_, {user}) {
             const res = await auth.createUserWithEmailAndPassword(user.email, user.password);
            // console.log(res.user.uid)
            return res.user;
             
        },
        loginUser: async function(_, {user}) {
            const res = await auth.signInWithEmailAndPassword(user.email, user.password);
            return res.user;
        }
    },
}

const server = new ApolloServer({

    typeDefs: fs.readFileSync('./schema.graphql', 'utf-8'),
    resolvers: apiResolvers
})

function installHandler(app) {

    server.applyMiddleware({ app, path: '/api', cors: true });
}

module.exports = { installHandler }