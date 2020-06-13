import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('Yay GraphQL');
});

const root = {

    friend: () => {
        return {
            "id": 12315464,
            "firstName": "Marc",
            "lastName": "Mendoza",
            "gender": "male",
            "language": "english",
            "email": "777marc@gmail.com"
        }
    }

};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8000, () => console.log("listening on 8000"));