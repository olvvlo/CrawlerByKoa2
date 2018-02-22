const cheerio = require('../utils/httpUtils')

module.exports = {
  async getDetail (path) {
    const $ = await cheerio(path)
    const content = $("#content")
    const obj = {}
    obj.title = content.find('h1').text()
    obj.pubdate = '2018-01-24 06:24'
    obj.count = '320'
    obj.mp3 = content.find('#playbar a').attr("href")
    obj.content = content.find('#content_main').html().replace(/src="/g, 'src="http://www.easyvoa.com')
    return obj
  }
}