const express = require('express');
const router = express.Router(); 


// User crud

// create user
router.post('/', (req, res) => {
    res.status(501).json({ error: 'Not Implemented' });
  });
  
  // list user
  router.get('/', (req, res) => {
    res.status(501).json({ error: 'Not Implemented' });
  });
  
  // get one user
  router.get('/:userID', (req, res) => {
    const { userID } = req.params;
    res.status(501).json({ error: `Not Implemented ${userID}` });
  });
  
  // update user
  router.put('/:userID', (req, res) => {
      const { userID } = req.params;
      res.status(501).json({ error: `Not Implemented ${userID}` });
    });
  
    // delete user
    router.delete('/:userID', (req, res) => {
      const { userID } = req.params;
      res.status(501).json({ error: `Not Implemented ${userID}` });
    });
  
module.exports = router;