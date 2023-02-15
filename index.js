
const express = require('express');
require( 'dotenv' ).config();

const app = express();

app.use( express.json() );

app.use( '/api/auth', require( './routes/auth' ));

app.use( express.static( 'public' ));

app.listen( process.env.PORT, () => console.log( 'Server started' ));

