import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('Yay GraphQL');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(8000, () => console.log("listening on 8000"));