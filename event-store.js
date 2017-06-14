import redis from 'redis'
import config from './config'

const sub = redis.createClient(config)

sub.on('pmessage', (pattern, channel, message) => {
  //save this to event-store table
  console.log(pattern, channel, message)
})

sub.psubscribe('*')
