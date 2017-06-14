import express from 'express'
import redis from 'redis'
import config from './config'
import uuid from 'uuid/v4'

const app = express()

console.log('fsfs', uuid());

const store = redis.createClient(config)
const test = redis.createClient(config)

app.get('/microdemo', (req, res) => {
  const sub = redis.createClient(config)
  const pub = redis.createClient(config)

  const { a, b } = req.query
  const eventId = uuid()

  console.log(a, b);

  pub.publish('ch1', JSON.stringify({
    eventId,
    a,
    b
  }))

  sub.on('message', (channel, message) => {
    console.log(channel, message)

    if(message == 'OK') {
      res.send(message)
    } else {
      res.send(message)
    }

    sub.unsubscribe()
    sub.quit()
    pub.quit()
  })

  sub.subscribe('ch1.' + eventId)
})


app.listen(1234)

export default app
