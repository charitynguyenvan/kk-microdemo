// while(true) {
  // fetch('http://13.228.23.106:1234/microdemo?p1=1&p2=2', {
  //   method: 'GET'
  // })
// }

setInterval(() => {
  fetch('http://13.228.23.106:1234/microdemo?p1=1&p2=2', {
    method: 'GET'
  })
}, 7000)
