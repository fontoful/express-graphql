const express = require('express')
const cors = require('cors')
const app = express()

// GraphQL
const { graphqlHTTP } = require('express-graphql')
const schema = require('./Schemas/index')

// Port
const PORT = 5000

app.use(cors())
app.use(express.json())
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
