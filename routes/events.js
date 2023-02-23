/* Routes Users
   host + /api/events
 */

const express                                              = require( 'express' );
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validateJWT }                                      = require('../middlewares/validate-jwt');
const { check }                                            = require('express-validator');
const { validateFiled }                                    = require('../middlewares/validate-fields');
const { isDate }                                           = require('../helpers/isDate');
const router                                               = express.Router();
router.use( validateJWT );

router.get( '/', getEvents );

router.post( '/',[
  check( 'title', 'The title is required' ).not().isEmpty(),
  check( 'start', 'The start date is required' ).custom( isDate ),
  check( 'end', 'The end date is required' ).custom( isDate ),
  validateFiled
], createEvent);

router.put( '/:id' ,[
  check( 'title', 'The title is required' ).not().isEmpty(),
  check( 'start', 'The start date is required' ).custom( isDate ),
  check( 'end', 'The end date is required' ).custom( isDate ),
  validateFiled
], updateEvent );

router.delete( '/:id' , deleteEvent );

module.exports = router;