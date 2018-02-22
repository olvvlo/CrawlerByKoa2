const cheerio = require('../utils/httpUtils')

module.exports = {
  async getHomeList () {
    const $ = await cheerio()
    const list = $("#new_news li")
    const aResult = []
    for (let i = 2; i < list.length; i++) {
      const obj = {}
      obj.id = 10000 + i
      obj.category = list.eq(i).find('font').text()
      obj.title = list.eq(i).find('.title_a').text()
      obj.link = '/detail' + list.eq(i).find('.title_a').attr('href')
      aResult.push(obj)
    }
    return aResult
  }
}