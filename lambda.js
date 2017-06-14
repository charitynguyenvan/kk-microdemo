import awsServerlessExpress from 'aws-serverless-express'
import app from './service-1'
const server = awsServerlessExpress.createServer(app)
const handler = (event, context) => {
  console.log("EVENT: " + JSON.stringify(event))
  awsServerlessExpress.proxy(server, event, context)
}
export default handler
