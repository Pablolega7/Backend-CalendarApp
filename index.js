
const express          = require('express');
const { dbConnection } = require('./database/config');
require( 'dotenv' ).config();

const app = express();

dbConnection();

app.use( express.json() );

app.use( '/api/auth', require( './routes/auth' ));

app.use( express.static( 'public' ));

app.listen( process.env.PORT, () => console.log( 'Server started' ));

