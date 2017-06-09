import redis from 'redis'
import config from './config'

const sub = redis.createClient(config)
const pub = redis.createClient(config)

sub.on('message', (channel, message) => {
  console.log(channel, JSON.parse(message))
  if(channel === 'Request') {
    if(Math.random() < 0.5) {
      pub.publish('Response', 'OK')
    } else {
      pub.publish('Response', 'KO OK')
    }
  }
})

sub.subscribe('Request')
