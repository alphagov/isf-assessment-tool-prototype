const express = require('express')
const router = express.Router()

var evidenceCount = 0

// Add your routes here - above the module.exports line

router.post('/what-evidence-answer', function (req, res) {

  let evidence = req.session.data['evidence']

  if (evidence.includes('Passport')) {
    res.redirect('/passport')
  }
  else if (evidence.includes('Driving licence')) {
    res.redirect('driving-licence')
  }
  else if (evidence.includes('Other')) {
    res.redirect('/other-evidence-1-name')
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
  else if (evidence.includes('Other')) {
    res.redirect('/other-evidence-1-name')
  }
  else {
    res.redirect('/element-e')
  }
})

router.post('/driving-licence-answer', function (req, res) {

  let evidence = req.session.data['evidence']

  if (evidence.includes('Other')) {
    res.redirect('/other-evidence-1-name')
  }
  else {
    res.redirect('/element-e')
  }
})


router.post('/other-evidence-1-a-answer', function (req, res) {

  let answer = req.session.data['other-evidence-1-a']

  if (answer === "yes") {
    res.redirect('/other-evidence-1-b')
  }
  else {
    res.redirect('/')
  }
})

router.post('/other-evidence-1-b-answer', function (req, res) {

  let answer = req.session.data['other-evidence-1-b']

  if (answer === "yes") {
    res.redirect('/other-evidence-1-c')
  }
  else {
    res.redirect('/other-evidence-1')
  }
})

router.post('/other-evidence-1-c-answer', function (req, res) {

  let answer = req.session.data['other-evidence-1-c']

  if (answer === "yes") {
    res.redirect('/other-evidence-1-d')
  }
  else {
    res.redirect('/other-evidence-1-e')
  }
})

router.post('/other-evidence-1-d-answer', function (req, res) {

  let answer = req.session.data['other-evidence-1-d']

  if (answer === "yes") {
    res.redirect('/other-evidence-1-f')
  }
  else {
    res.redirect('/other-evidence-1')
  }
})

router.post('/other-evidence-1-e-answer', function (req, res) {

  let answer = req.session.data['other-evidence-1-e']

  if (answer === "yes") {
    res.redirect('/other-evidence-1-f')
  }
  else {
    res.redirect('/other-evidence-1')
  }
})

router.post('/other-evidence-1-f-answer', function (req, res) {

  let answer = req.session.data['other-evidence-1-f']

  if (answer === "yes") {
    res.redirect('/other-evidence-1-g')
  }
  else {
    res.redirect('/other-evidence-1')
  }
})

router.post('/other-evidence-1-g-answer', function (req, res) {

  let answer = req.session.data['other-evidence-1-g']

  if (answer === "yes") {
    res.redirect('/other-evidence-1-h')
  }
  else {
    res.redirect('/other-evidence-1')
  }
})

router.post('/other-evidence-1-h-answer', function (req, res) {

  let answer = req.session.data['other-evidence-1-g']

  if (answer === "yes") {
    res.redirect('/other-evidence-1-i')
  }
  else {
    res.redirect('/other-evidence-1')
  }
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
    res.redirect('/result')
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
