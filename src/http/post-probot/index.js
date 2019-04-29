// Enable secure sessions, express-style middleware, and more:
// https://docs.begin.com/en/functions/http/
//
// let begin = require('@architect/functions')

exports.handler = async function http(req) {
  console.log(req)
  return {
    status: 302,
    location: '/'
  }
}
