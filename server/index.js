const express = require('express')

const app = express()

app.use(express.static('build'))
app.use((req, res, next) => {
  res.redirect('/')

  next()
})

app.listen(3000, () => console.info('[webserver] started on port 3000'))
