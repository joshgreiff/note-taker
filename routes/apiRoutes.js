const path = require('path')
const fs = require('fs')
const router = require('express').Router()
const { notes } = require('../db/db.json')
const noteArray = []

router.get('/notes', (req, res) => {
    // Make query to database
    
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.json(JSON.parse(data));
        
      });
})

router.post('/notes', ({ body }, res) => {
    const note = body
    
    noteArray.push(note)
    console.log(noteArray)
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(noteArray, null, 2))
})

module.exports = router 