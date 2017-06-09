const express = require('express')
const app = express()
const redis = require('redis')
const config = require('./config')

app.get('/microdemo',(req, res) => {
  const sub = redis.createClient(config.PORT)
  const pub = redis.createClient(config.HOST)

  const p1 = req.query.p1
  const p2 = req.query.p2

  pub.publish('Request', JSON.stringify({
    p1,
    p2
  }))

  sub.on('message', (channel, message) => {
    console.log(channel, message)

    if(message == 'OK') {
      res.json({
        'hello': 'World'
      })
    } else {
      res.json({
        'goodbye': 'World'
      })
    }

    sub.unsubscribe()
    sub.quit()
    pub.quit()
  })

  sub.subscribe('Response')
})

app.listen(3000)
