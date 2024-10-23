const express = require('express')
const router = express.Router({ mergeParams: true })

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

//current date
const date = new Date();
let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()
let fullDate = `${day}-${month}-${year}`

// define the home page route
router.get("/", (req, res) => res.send(`<h1>Welcome!</h1>
  <ul class="navigation"> 
    <li class="option"><a href="about">About</a></li>
    <li><a href="contact">Contact</a></li>
    <li><a href="date">Date</a></li>
  </ul>`)); 
  // define the about route
 router.get('/about', (req, res) => res.send (`<h1>This is about page</h1>`))
router.get('/contact', (req, res) => res.send (
  `<h1>Here are the contacts</h1>
  <p>Email: example@gmail.com </p>`
))
router.get('/date', (req, res) => res.send (fullDate))

module.exports = router
