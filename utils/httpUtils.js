const http = require("http")
const cheerio = require("cheerio")
const options = {
  hostname: 'www.easyvoa.com'
}
module.exports = (path) => {
  return new Promise((resolve, reject) => {
    options.path = path
    http.get(options, (res) => {
      if (res.statusCode === 200) {
        let result = ''
        res.on("data", (data) => {
          result += data
        })
        res.on("end", () => {
          result ? resolve(cheerio.load(result)) : reject('error')
        })
      }
    })
  })
}
