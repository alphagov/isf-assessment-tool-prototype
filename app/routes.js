const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching
router.post('/evidence-score-1-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let meetScore = req.session.data['evidence-score']

  if (meetScore === '0') {
    res.redirect('/result')
  } else {
    res.redirect('/evidence-score-2')
  }
})

router.post('/evidence-score-2-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let meetScore = req.session.data['evidence-score']

  if (meetScore === '1') {
    res.redirect('/result')
  } else {
    res.redirect('/evidence-score-3')
  }
})

router.post('/evidence-score-3-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let meetScore = req.session.data['evidence-score']

  if (meetScore === '2') {
    res.redirect('/result')
  } else {
    res.redirect('/evidence-score-4')
  }
})

router.post('/evidence-score-4-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let evidenceCount = req.session.data['evidence-count']

  if (evidenceCount >= '1') {
    res.redirect('/evidence-score-1')
  } else {
    res.redirect('/result')
  }
})

module.exports = router
