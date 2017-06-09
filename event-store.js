const redis = require('redis')
const config = require('./config')

const sub = redis.createClient(config.PORT)
const pub = redis.createClient(config.HOST)

sub.on('message', (channel, message) => {
  message = JSON.parse(message)
  console.log(channel, message)
  if(channel === 'Request') {
    if(Math.random() < 0.5) {
      pub.publish('Response', 'OK')
    } else {
      pub.publish('Response', 'KO OK')
    }
  }
})

sub.subscribe('Request')
