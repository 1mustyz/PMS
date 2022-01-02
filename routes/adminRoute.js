var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController')
const staffController = require('../controllers/staffController')
const passport = require('passport');

/** All post request *//////////////////////////////////////////////

// register staff route
router.post('/register-staff', adminController.registerStaff)

// create inmate
router.post('/create-inmate',  adminController.registerInmate)


// login staff
router.post('/login', adminController.loginStaff)


// /** All get request *///////////////////////////////////////////////////////////////

// get all staff
router.get('/get-all-staff', adminController.findAllStaff)


// get single staff
router.get('/get-single-staff', adminController.singleStaff)

// get all inmate
router.get('/get-all-inmate',  adminController.findAllInmate)

// get single inmate
router.get('/get-single-inmate', adminController.singleInmate)


/** All put request *//////////////////////////////////////////////////////////

// edit single staff
router.put('/edit-single-staff', adminController.editStaff)

// // passport.authenticate("jwt.admin",{session:false}),

// set profile pic
router.put('/set-profile-pic',  adminController.setProfilePic);


// edit inmate
router.put('/edit-inmate', adminController.editInmate)

// change password
router.post('/change-password', adminController.changePassword)

// add inmate offence
router.put('/add-inmate-offence', staffController.saveInmateOffence)

// add inmate visitors
router.put('/add-inmate-visitor', staffController.saveInmateVisitor)


/** All delete request *////////////////////////////////////////////////////

// delete single staff
router.delete('/delete-single-staff', adminController.removeStaff)

// delete inmate
router.delete('/delete-single-inmate', adminController.removeInmate)


module.exports = router;