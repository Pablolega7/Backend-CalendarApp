/* Routes Users
   host + /api/auth
 */

const express                               = require( 'express' );
const { createUser, loginUser, renewToken } = require('../controllers/auth');
const router                                = express.Router();
const { check }                             = require( 'express-validator' );
const { validateFiled }                     = require('../middlewares/validate-fields');
const { validateJWT }                       = require('../middlewares/validate-jwt');

router.post(
    '/new',
    [
        check( 'name', 'The Name is Required ' ).not().isEmpty(),
        check( 'email', 'The Email is Required' ).isEmail(),
        check( 'password', 'The password must be Six Characters' ).isLength({ min: 6 }),
        validateFiled
    ],
    createUser
);

router.post(
    '/' ,
    [
        check( 'email', 'The Email is Required' ).isEmail(),
        check( 'password', 'The password must be Six Characters' ).isLength({ min: 6 }),
        validateFiled
    ],
 loginUser
);

router.get( '/renew' , validateJWT, renewToken );

module.exports = router;