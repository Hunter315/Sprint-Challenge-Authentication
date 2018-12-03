const axios = require('axios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('knex')(require('../knexfile').development);


 

const jwtKey = require('../_secrets/keys').jwtKey;
const { authenticate } = require('./middlewares');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function generateJWT(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  };

  const secret = jwtKey;
  const options = {
    expiresIn: '1h',
  };

  return jwt.sign(payload, secret, options);
}

function register(req, res) {
  // implement user registration
  const creds = req.body;

  //hash that password
  const hash = bcrypt.hashSync(creds.password, 6);

  //override pass with my new hash
  creds.password = hash;

  //save that info to my db
  db('users')
  .insert(creds)
  .then(ids => {
      res.status(201).json({message: "Registration Successful"}) //if reg doesnt work, try removing ids
  })
  .catch(err => res.status(400).json({error: "Unable to Register", err}));
  
  }



function login(req, res) {
  // implement user login
  const creds = req.body;

    db('users')
    .where({ username: creds.username })
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(creds.password, user.password)) {
            const token = generateJWT(user);
            res.status(200).json(token); 
            
        } else {
          res.status(401).json({message: "You shall not pass!"});
        }
    })
    .catch(err => res.status(401).json({ message: "Error logging you in"}));
};

function getJokes(req, res) {
  axios
    .get(
      'https://safe-falls-22549.herokuapp.com/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes'});
    });
}
