const express = require('express');
const router = express.Router();
// const { ensureAuthenticated } = require("../config/auth.js");

// Login page
router.get('/dashboard', (req, res) => {
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