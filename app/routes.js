const express = require('express')
const router = express.Router()

var evidenceCount = 0

// Add your routes here - above the module.exports line



router.post('/what-elements-answer', function (req, res) {

  let element = req.session.data['elements']

  if (element.includes('A')) {
    res.redirect('/what-evidence')
  }
  else if (element.includes('B')) {
    res.redirect('/how-check-evidence')
  }
  else if (element.includes('C')) {
    res.redirect('/how-check-time')
  }
  else if (element.includes('D')) {
    res.redirect('/how-check-stolen')
  }
  else if (element.includes('E')) {
    res.redirect('/how-check-person')
  }
  else {
    res.redirect('/alternatives')
  }
})


router.post('/what-evidence-answer', function (req, res) {

  let element = req.session.data['elements']

  if (element.includes('B')) {
    res.redirect('/how-check-evidence')
  }
  else if (element.includes('C')) {
    res.redirect('/how-check-time')
  }
  else if (element.includes('D')) {
    res.redirect('/how-check-stolen')
  }
  else if (element.includes('E')) {
    res.redirect('/how-check-person')
  }
  else {
    res.redirect('/result')
  }
})

router.get('/how-check-evidence', function (req, res) {

  let evidences = req.session.data['evidences']
  let evidenceCount = evidences.length -1
  let evidence = evidences[evidenceCount]

  res.render('how-check-evidence', { 'evidence': evidence })
})

router.post('/check-evidence-answer', function (req, res) {

  let element = req.session.data['elements']
  let evidenceCount = 0

  // if (evidenceCount >= 0) {
  //   res.redirect('/how-check-evidence')
  // }
  // else if (element.includes('C')) {
  //   res.redirect('/how-check-time')
  // }

  if (element.includes('C')) {
    res.redirect('/how-check-time')
  }

  else if (element.includes('D')) {
    res.redirect('/how-check-stolen')
  }
  else if (element.includes('E')) {
    res.redirect('/how-check-person')
  }
  else {
    res.redirect('/result')
  }
})

router.post('/check-time-answer', function (req, res) {

  let element = req.session.data['elements']

  if (element.includes('D')) {
    res.redirect('/how-check-stolen')
  }
  else if (element.includes('E')) {
    res.redirect('/how-check-person')
  }
  else {
    res.redirect('/result')
  }
})

router.post('/check-fraud-answer', function (req, res) {

  let element = req.session.data['elements']

  if (element.includes('E')) {
    res.redirect('/how-check-person')
  }
  else {
    res.redirect('/result')
  }
})


// Element A scores
router.post('/evidence-score-1-answer', function (req, res) {

  let meetScore = req.session.data['evidence-score']

  if (meetScore === '0') {
    res.redirect('/result')
  } else {
    res.redirect('/evidence-score-2')
  }
})

router.post('/evidence-score-2-answer', function (req, res) {

  let meetScore = req.session.data['evidence-score']

  if (meetScore === '1') {
    res.redirect('/result')
  } else {
    res.redirect('/evidence-score-3')
  }
})

router.post('/evidence-score-3-answer', function (req, res) {

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
