const express = require('express')
const router = express.Router()


// Add your routes here - above the module.exports line

router.post('/what-evidence-answer', function (req, res) {

  let evidence = req.session.data['evidence']

  if (evidence.includes('Passport')) {
    res.redirect('/passport')
  }
  else if (evidence.includes('Driving licence')) {
    res.redirect('driving-licence')
  }
  else {
    res.redirect('/element-e')
  }
})

router.post('/passport-answer', function (req, res) {

  let evidence = req.session.data['evidence']

  if (evidence.includes('Driving licence')) {
    res.redirect('driving-licence')
  }
  else {
    res.redirect('/element-e')
  }
})

router.post('/driving-licence-answer', function (req, res) {

  let evidence = req.session.data['evidence']
  res.redirect('/element-e')
})

router.post('/element-e-answer', function (req, res) {

  let answera = req.session.data['element-e-a']
  let answer = req.session.data['element-e']

  if (answera === "yes") {
    if (answer === "1") {
      req.session.data['elementEScore'] = 1
    }
    else if (answer === "2") {
      req.session.data['elementEScore'] = 2
    }
    else if (answer === "3") {
      req.session.data['elementEScore'] = 3
    }
    else if (answer === "4") {
      req.session.data['elementEScore'] = 4
    }
  }
  else {
    req.session.data['elementEScore'] = 0
  }
  res.redirect('/element-d-a')
})

router.post('/element-d-a-answer', function (req, res) {

  let answer = req.session.data['element-d-a']

  if (answer === "yes") {
    res.redirect('/element-d-b')
  }
  else {
    res.redirect('/element-c-a')
  }
})

router.post('/element-d-b-answer', function (req, res) {

  let answer = req.session.data['element-d-b']

  if (answer === "yes") {
    res.redirect('/element-d-c')
  }
  else {
    res.redirect('/element-c-a')
  }
})



router.post('/element-c-a-answer', function (req, res) {

  let answer = req.session.data['element-c-a']

  if (answer === "yes") {
    res.redirect('/element-c-b')
  }
  else {
    res.redirect('/your-answers')
  }
})

router.post('/other-evidence-1-answer', function (req, res) {

  let evidence = req.session.data['other-count']

  if (evidence >= 2) {
    res.redirect('/other-evidence-2-name')
  }
  else {
    res.redirect('/element-e')
  }
})

router.post('/other-evidence-2-answer', function (req, res) {

  let evidence = req.session.data['other-count']

  if (evidence >= 3) {
    res.redirect('/other-evidence-3')
  }
  else {
    res.redirect('/')
  }
})

module.exports = router
