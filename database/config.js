const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
       await mongoose.connect( process.env.DB_CNN );

        console.log( 'DB Online' );

    } catch ( mistake ) {
        console.log( mistake );
        throw new Error( 'Mistake when Starting the DB see Logs' );
    };
};

module.exports = {
    dbConnection
};