const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth.js");

router.get('/', ensureAuthenticated, (req, res) => {
	res.render('share', {
		user: req.user
	});
})

// Login page
router.get('/dashboard', ensureAuthenticated, (req, res) => {
	res.render('dashboard', {
		user: req.user
	});
})

// Register page 
router.get('/register', (req, res) => {
	res.render('register');
});

router.get('/login', (req, res) => {
	res.render('login');
})


module.exports = router;