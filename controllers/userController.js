const bcrypt = require('bcrypt');

const User = require('../models/userModel');


async function getUser (req, res) {
  try {
    const user = {
        "id": 123,
        "nome": "joao"
    }

    return res.status(200).json(user)

  } catch (error) {
    res.status(500).json({error: error.message});
  }
}


module.exports = { getUser };
