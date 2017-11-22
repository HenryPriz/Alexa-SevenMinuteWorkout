const Alexa = require('alexa-sdk')


const exerStart = `
  <emphasis level ="moderate">Start</emphasis>
  <break time='10s'/>
  <break time='10s'/>
  <break time='10s'/>
  <break time='10s'/>
  Ten seconds left.
  <break time='10s'/>
  <emphasis level ="moderate">Thats time</emphasis>
`;

const Sets = `
  Ready
  <break time='500ms'/>
  ${exerStart}
  Rest
`;

const speech = `
  Hello there, before we begin your seven minute training session I will give you a few seconds to get ready.
  <break time='5s'/>
  Okay lets go and remember to try and put as <emphasis level ="moderate">much</emphasis> effort into it as possible keep breathing and keep yourself moving.
  <break time='500ms'/>
  ${exerStart}
  Thats one session done now rest for thirty seconds.
  <break time='10s'/>
  <break time='10s'/>
  <break time='9s'/>
  ${Sets}
  <break time='10s'/>
  <break time='10s'/>
  <break time='9s'/>
  ${Sets}
  <break time='10s'/>
  <break time='10s'/>
  <break time='9s'/>
  ${Sets}
  <break time='10s'/>
  <break time='10s'/>
  <break time='9s'/>
  ${Sets}
  <break time='10s'/>
  <break time='10s'/>
  <break time='9s'/>
  ${Sets}
  <break time='10s'/>
  <break time='10s'/>
  <break time='9s'/>
  Ready
  <break time='10s'/>
  <break time='10s'/>
  <break time='10s'/>
  ${exerStart}
  Great work you have completed your session.
  I hope you had a good one.
`

const handlers = {
  StartSession: function() {
    this.emit(':tell', speech)
  },
  LaunchRequest: function() {
  this.emit('StartSession')
},
}

exports.handler = (event, context, callback) => {
  const alexa = Alexa.handler(event, context, callback)
  alexa.registerHandlers(handlers)
  alexa.execute()
}
