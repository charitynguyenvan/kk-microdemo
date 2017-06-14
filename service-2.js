import redis from 'redis'
import config from './config'
import allChannels from './channels'

const sub = redis.createClient(config)
const pub = redis.createClient(config)

// subscribe all channels
for(let mChannel in allChannels) {

  let handler = allChannels[mChannel]
  let method = require('./controllers/' + handler.controller)[handler.method]

  // console.log(mChannel, message);

  sub.on('message', (channel, message) => {
    if(channel == mChannel) {
      console.log(mChannel, message);
      const eventMessage = JSON.parse(message)
      const eventId = eventMessage.eventId

      pub.publish(channel + '.' + eventId, JSON.stringify(method(eventMessage)))
    }
  })
  sub.subscribe(mChannel)
}
