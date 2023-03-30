const { makeExecutableSchema } = require('@graphql-tools/schema')
const { createServer } = require('@graphql-yoga/node')
const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
const resolvers = require('./resolvers')

mongoose.connect("mongodb+srv://lucasbiason:0WwaXaKLRtVhSd6K@cluster0.9hvcq.gcp.mongodb.net/nodestudies");
//let db = mongoose.connection;


async function main() {

    const typeDefinitions = fs.readFileSync(
        path.resolve(__dirname, 'schema.graphql'),
        {encoding: 'utf-8'}
    )

    const schema = makeExecutableSchema({
        typeDefs: [typeDefinitions],
        resolvers: [resolvers]
    })

    const server = createServer({ schema })
    await server.start()
}
main()